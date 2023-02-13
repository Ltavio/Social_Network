import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";

import Contact from "../../entities/contact.entity";

import { IContactResponse, IContactUpdate } from "../../interfaces/contact";

const updatedContactService = async (
    data: IContactUpdate,
    clientId: string,
    contactId: string
): Promise<IContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const searchClient = await contactRepository.findOne({
        where: {
            client: {
                id: clientId
            }
        }
    })
    const searchContact = await contactRepository.findOneBy({id: contactId})

    if (!searchClient) {
        throw new AppError("Client not found", 404)
    }

    if (!searchContact) {
        throw new AppError("Contact not found", 404)
    }

    const { name, email, phone } = data

    await contactRepository.update(searchContact.id, {
        name: name ? name : searchContact.name,
        email: email ? email : searchContact.email,
        phone: phone ? phone : searchContact.phone,
    })

    const contact = await contactRepository.findOneBy({ id: searchContact.id})

    return {
        message: "Updated contact",
        data: contact!
    }
}

export default updatedContactService;