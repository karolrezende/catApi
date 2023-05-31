import {z} from 'zod'
export const userSchemaSignIn = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string()
})
export const userSchemaLogin = userSchemaSignIn.omit({username: true})