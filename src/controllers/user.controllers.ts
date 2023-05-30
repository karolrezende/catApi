import { Request, Response } from "express";
import { iUserRes, userSchemaReq } from "../interfaces/user.interfaces";
import { createUser } from "../services/user.services";

export const createUserController = async(req: Request, res: Response): Promise<Response> =>{
    const userBody: userSchemaReq = req.body
    const createdUser: iUserRes = await createUser(userBody)
    return res.status(201).json(createdUser)
}