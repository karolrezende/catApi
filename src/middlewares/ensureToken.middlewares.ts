import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import jwt from 'jsonwebtoken'
export const ensureToken = async (req:Request,res:Response, next:NextFunction):Promise<Response|void>=>{
    let token = req.headers.authorization
    
    if(!token){
        throw new AppError("Missing Bearer Token", 401)
    }
    token = token.split(" ")[1]

    jwt.verify(token, "karolélinda", (err: any, decoded: any)=>{
        if(err){
            throw new AppError(err.message, 401)
        }
        res.locals.email = decoded.sub
    })
    return next()
}