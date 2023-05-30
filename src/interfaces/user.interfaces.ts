import {z} from 'zod'
import { userSchemaSignIn } from '../schemas/user.schemas'
export type userSchemaReq = z.infer<typeof userSchemaSignIn>

export interface iUserRes {
    username: string,
    email: string
}