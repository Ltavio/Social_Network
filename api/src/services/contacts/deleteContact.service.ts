import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";

import Contact from "../../entities/contact.entity";
import Client from "../../entities/client.entity";


const deleteContactsService = async(contactId: string): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const searchContact = await contactRepository.findOneBy({id: contactId});
  
    if (!searchContact) { throw new AppError("contact not found", 404) };
    if (!searchContact.isActive) { throw new AppError("contact not active") };
  
    await contactRepository.update(searchContact.id, { isActive: false } );
}

export default deleteContactsService;