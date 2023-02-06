import AppDataSource from "../../data-source";

import Client from "../../entities/client.entity";
import AppError from "../../errors/appErrors";

import { IListClientResponse, IClient } from "../../interfaces/client";

const listClientsService = async(id: string): Promise<IListClientResponse> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOneBy({ id })

    if(!client){
        throw new AppError( "Client not found", 404)
    }

    return {
        message: "Listed client",
        data: client
    }
}

export default listClientsService;