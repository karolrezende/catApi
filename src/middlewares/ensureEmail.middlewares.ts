import { NextFunction, Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../errors";
import { iUserRes } from "../interfaces/user.interfaces";

export const ensureEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> =>{
    const queryEmailString: string = `
        SELECT 
                username, email
        FROM
            users
        WHERE email = $1;
    `
    const queryEmailConfig: QueryConfig = {
        text: queryEmailString,
        values: [req.body.email]
    }
    const queryEmailResult: QueryResult<iUserRes> = await client.query(queryEmailConfig)

    if(queryEmailResult.rowCount > 0){
      throw new AppError ("This email is already in use", 409)
    }

    return next()
}