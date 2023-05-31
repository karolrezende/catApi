import { QueryConfig, QueryResult } from "pg";
import {
  iToken,
  iUserLoginRes,
  loginShemaReq,
} from "../interfaces/user.interfaces";
import { client } from "../database";
import { AppError } from "../errors";
import bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
export const loginUser = async (userBody: loginShemaReq): Promise<iToken> => {
  const queryString = `
    SELECT *
    FROM users
    WHERE email = $1;
   `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userBody.email],
  };

  const queryResult: QueryResult<iUserLoginRes> = await client.query(
    queryConfig
  );

  if (queryResult.rowCount === 0) {
    throw new AppError("Email/password invalid", 401);
  }

  const validPassword: boolean = await bcrypt.compare(userBody.password, queryResult.rows[0].password)

  if(!validPassword){
    throw new AppError("Email/password invalid", 401)
  }

  const token: string = jwt.sign({
    email: queryResult.rows[0].email.toString()
  }, 'karolélinda',{
    expiresIn: '1d',
    subject: queryResult.rows[0].email.toString()
  })
  return {token}
};
