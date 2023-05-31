import format from "pg-format"
import { iUserRes, userSchemaReq } from "../interfaces/user.interfaces"
import * as bcrypt from 'bcryptjs'
import { QueryResult } from "pg"
import { client } from "../database"
export const createUser = async (userBody: userSchemaReq): Promise<iUserRes> =>{
    userBody.password = await bcrypt.hash(userBody.password, 10)
 
    const queryString = format(`
        INSERT INTO 
            users (%I)
        VALUES 
            (%L)
        RETURNING id, username, email; 
    `,
    Object.keys(userBody),
    Object.values(userBody)
    )

    const queryResult: QueryResult<iUserRes> = await client.query(queryString)

    return queryResult.rows[0]
}