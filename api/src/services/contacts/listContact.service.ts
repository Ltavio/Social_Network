import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";

import Contact from "../../entities/contact.entity";
import Client from "../../entities/client.entity";

import { IListContactResponse } from "../../interfaces/contact";

const listContactService = async (clientId: string): Promise<IListContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const searchClient = await contactRepository.find({
        where: {
            client: {
                id: clientId,
            }
        }
    })

    if (!searchClient) {
        throw new AppError("Client not found", 404)
    }

    return {
        message: "Listed contacts",
        data: searchClient
    }
}

export default listContactService;