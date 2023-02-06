import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";

import Contact from "../../entities/contact.entity";
import Client from "../../entities/client.entity";

import { IContactRequest, IContactResponse } from "../../interfaces/contact";

const createContactsService = async(
    data: IContactRequest,
    clientId: string
): Promise<IContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const clientRepository = AppDataSource.getRepository(Client);

    const {name, email, phone} = data;

    const searchClient = await clientRepository.findOneBy({id: clientId })
    const searchContact = await contactRepository.findOneBy({ email })
    const searchContactClient = await contactRepository.findOne({
        where: {
            client: {
                id: clientId,
            }
        }
    })

    if(searchContactClient) {
        throw new AppError("Contact already register")
    }

    if(searchContact) {
        throw new AppError("Contact already register")
    }
    
    if(!searchClient) {
        throw new AppError("Client not found", 404)
    }

    const contact = contactRepository.create({
        name: name,
        email: email,
        phone: phone,
        client: searchClient,
    })

    await contactRepository.save(contact)

    return {
        message: "Created contact",
        data: contact
    }
}

export default createContactsService;