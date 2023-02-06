import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";

import Client from "../../entities/client.entity";

const deleteClientService = async(id: string): Promise<boolean> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const clients = await clientRepository.findOneBy({ id })

    if(!clients?.isActive) {
        throw new AppError( "Unable to delete inactive client" )
    }

    clients.isActive = false
    await clientRepository.save(clients)

    return true
}


export default deleteClientService;