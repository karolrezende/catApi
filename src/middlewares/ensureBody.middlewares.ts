import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const ensureBody = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction)=>{
    const user = schema.parse(req.body)
    req.body = user

    return next()
}