import { Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { iMovie, iUser, iUserRequest } from "../interfaces/movie.interfaces";
import { v4 as uuidv4 } from 'uuid';
import format from "pg-format";
const getMovies = async (req: Request, res: Response): Promise<Response> =>{

    const queryString: string = `
        SELECT 
              *
        FROM 
            movies;
    `
    const queryResult: QueryResult<iMovie> = await client.query(queryString)

    return res.status(200).json(queryResult.rows)
}

const createUser = async (req: Request, res: Response): Promise<Response> =>{
    const queryEmailString: string = `
        SELECT 
                *
        FROM
            users
        WHERE email = $1;
    `
    const queryEmailConfig: QueryConfig = {
        text: queryEmailString,
        values: [req.body.email]
    }
    const queryEmailResult: QueryResult<iUser> = await client.query(queryEmailConfig)

    if(queryEmailResult.rowCount > 0){
        return res.status(409).json({
            message: 'this email is already in use'
        })
    }
    const userReq = {
        token: uuidv4(),
        ...req.body
    }
    const queryString: string = format(
        `
        INSERT INTO users
                (%I) 
        values
                (%L)
        RETURNING *;
    `,
    Object.keys(userReq),
    Object.values(userReq)
    )

    const queryResult: QueryResult<iUser> = await client.query(queryString)

    return res.status(201).json(queryResult.rows)
}

export {getMovies, createUser}