import { Request, Response } from "express";
import { iUserRes, loginShemaReq, userSchemaReq } from "../interfaces/user.interfaces";
import { createUser } from "../services/createUser.services";
import { loginUser } from "../services/loginUser.services";
import { getUser } from "../services/getUser.services";

export const createUserController = async(req: Request, res: Response): Promise<Response> =>{
    const userBody: userSchemaReq = req.body
    const createdUser: iUserRes = await createUser(userBody)
    return res.status(201).json(createdUser)
}

export const loginUserController = async (req: Request, res:Response):Promise<Response> =>{
    const userBody: loginShemaReq = req.body
    const loggedUser = await loginUser(userBody)
    
    return res.status(200).json(loggedUser)
}

export const getUserController = async (req: Request, res: Response): Promise<Response>=>{
    const tokenEmail: string = res.locals.email
    const userData: iUserRes = await getUser(tokenEmail)
    return res.status(200).json(userData)
}