import { Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import { iMovie } from "../interfaces/movie.interfaces";

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
export {getMovies}