import {  QueryResult } from "pg";
import { client } from "../database";
import { iMovie  } from "../interfaces/movie.interfaces";


const getMovies = async (): Promise<iMovie[]> =>{

    const queryString: string = `
        SELECT 
              *
        FROM 
            movies;
    `
    const queryResult: QueryResult = await client.query(queryString)

    return queryResult.rows
}



export {getMovies}