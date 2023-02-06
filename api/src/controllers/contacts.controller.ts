import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import createContactsService from "../services/contacts/createContact.service";
import listContactService from "../services/contacts/listContact.service";
import deleteContactsService from "../services/contacts/deleteContact.service";
import updatedContactService from "../services/contacts/updatedContact.service";

const createContactController = async (req: Request, res: Response) => {
    const data = req.body;
    const id = req.user.id

    const response = await createContactsService(data, id)

    return res.status(201).json(instanceToPlain(response))
}

const listContactController = async (req: Request, res: Response) => {
    const clientId = req.user.id

    const response = await listContactService(clientId)

    res.status(200).json(instanceToPlain(response));
}

const deleteContactController = async (req: Request, res: Response) => {
    const clientId = req.user.id;
    await deleteContactsService(clientId);

    res.status(204).end();
}

const updatedContactController = async (req: Request, res: Response) => {
    const data = req.body;
    const id = req.user.id;

    const response = await updatedContactService(data, id);

    return res.status(200).json(instanceToPlain(response));
}

export {
    createContactController,
    updatedContactController,
    listContactController,
    deleteContactController,
}