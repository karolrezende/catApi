import { z } from "zod";
import { userSchemaLogin, userSchemaSignIn } from "../schemas/user.schemas";
export type userSchemaReq = z.infer<typeof userSchemaSignIn>;
export type loginShemaReq = z.infer<typeof userSchemaLogin>;

export interface iUserRes {
  id: number;
  username: string;
  email: string;
}
export interface iUserLoginRes {
  id: number;
  username: string;
  email: string;
  password: string;
}
export interface iToken {
  token: string;
}
