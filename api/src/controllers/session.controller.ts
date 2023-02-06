import { Request, Response } from "express";
import { IClientLogin } from "../interfaces/client";

import clientSessionService from "../services/session/session.service";

const clientSessionController = async (req: Request, res: Response) => {
  const { email, password }: IClientLogin = req.body;

  const token = await clientSessionService({ email, password });

  return res.json({ token });
};

export default clientSessionController;