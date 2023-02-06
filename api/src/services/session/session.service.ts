import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import Client from "../../entities/client.entity";

import { IClientLogin } from "../../interfaces/client";

const clientSessionService = async({ email, password }: IClientLogin): Promise<string> => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({ email });

    if (!client) { 
        throw new AppError( "Account not found" ) 
    };
    
    if (!client.password) { 
        throw new AppError( "Password not found", 401 ) 
    };
    
    if (!bcrypt.compareSync(password, client.password)){
        throw new AppError("Wrong email/password", 403)
    };

    const token = jwt.sign({email:client.email}, process.env.SECRET_KEY as string, {
        subject: client.id,
        expiresIn: "24h"
    });

    return token;
};

export default clientSessionService;