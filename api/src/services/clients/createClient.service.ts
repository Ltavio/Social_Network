import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";
import bcrypt from "bcrypt";

import Client from "../../entities/client.entity";

import { IClientRequest, IClientResponse } from "../../interfaces/client";

const createClientService = async(
    { name, email, password, phone,}: IClientRequest): Promise<IClientResponse> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const clients = await clientRepository.findOneBy({ email })

    if(clients){
        throw new AppError( "Email already exists")
    }

    const client = clientRepository.create({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10),
        phone: phone,
    })

    await clientRepository.save(client)

    return {
        message: "Create client",
        data: client
    }
}

export default createClientService;

