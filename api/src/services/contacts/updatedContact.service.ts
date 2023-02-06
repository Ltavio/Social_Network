import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";

import Contact from "../../entities/contact.entity";

import { IContactResponse, IContactUpdate } from "../../interfaces/contact";

const updatedContactService = async (
    data: IContactUpdate,
    id: string
): Promise<IContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const searchClient = await contactRepository.findOne({
        where: {
            client: {
                id
            }
        }
    })

    if (!searchClient) {
        throw new AppError("Client not found", 404)
    }

    const { name, email, phone } = data

    await contactRepository.update(searchClient.id, {
        name: name ? name : searchClient.name,
        email: email ? email : searchClient.email,
        phone: phone ? phone : searchClient.phone,
    })

    const contact = await contactRepository.findOneBy({ id: searchClient.id})

    return {
        message: "Updated contact",
        data: contact!
    }
}

export default updatedContactService;