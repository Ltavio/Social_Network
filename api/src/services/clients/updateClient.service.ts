import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";

import Client from "../../entities/client.entity";

import { IClientUpdate, IClientResponse } from "../../interfaces/client";

const updatedClientService = async(
    dataClient: IClientUpdate,
    id: string
): Promise<IClientResponse> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const clients = await clientRepository.findOneBy({ id })

    if(!clients) {
        throw new AppError( "Client not found" )
    }

    const data = Object.keys(dataClient);

    if ( data.includes( "isActive" ) || data.includes( "id" ) ) {
        throw new AppError( "Not Possible update isActive or ID", 401 )
    };

    await clientRepository.update(clients!.id, {
        ...clients,
        ...dataClient,
        updatedAt: new Date(),
    })

    return {
        message: "Updated client",
        data: clients
    }
}

export default updatedClientService;