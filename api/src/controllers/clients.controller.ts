import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import createClientService from "../services/clients/createClient.service";
import listClientsService from "../services/clients/listClients.service";
import deleteClientService from "../services/clients/deleteClient.service";
import updatedClientService from "../services/clients/updateClient.service";

const createClientController = async (req: Request, res: Response) => {
    const { name, email, password, phone } = req.body;

    const response = await createClientService({name, email, password, phone});

    return res.status(201).json(instanceToPlain(response))
}

const listClientsController = async (req: Request, res: Response) => {
    const id = req.user.id

    const response = await listClientsService(id)

    return res.status(200).json(instanceToPlain(response))
}

const updateClientController = async (req: Request, res: Response) => {
    const dataClient = req.body;
    const {id} = req.params;
    const response = await updatedClientService(dataClient, id)
}

const deleteClientController = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteClientService(id)

    return res.status(204).json({ message: "Client deleted with sucess!"})
}

export {
    createClientController,
    listClientsController, 
    updateClientController,
    deleteClientController
}