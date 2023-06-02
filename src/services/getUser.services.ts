import jwt from "jsonwebtoken"
import { QueryConfig, QueryResult } from "pg"
import { iUserRes } from "../interfaces/user.interfaces"
import { client } from "../database"

export const getUser = async (token: string): Promise<iUserRes> =>{
    
    const queryString: string = `
        SELECT id, username, email
        FROM users
        WHERE email = $1;
    `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [ token ]
    }

    const queryResult: QueryResult<iUserRes> = await client.query(queryConfig)

    return queryResult.rows[0]
}