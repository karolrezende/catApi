import { Router } from "express";
import { getMoviesControllers } from "../controllers/movies.controllers";
import { ensureBody } from "../middlewares/ensureBody.middlewares";
import { userSchemaLogin, userSchemaSignIn } from "../schemas/user.schemas";
import { ensureEmail } from "../middlewares/ensureEmail.middlewares";
import { createUserController, getUserController, loginUserController } from "../controllers/user.controllers";

const movieRoutes: Router = Router()
const userRoutes: Router = Router()
const loginRoutes: Router = Router()

movieRoutes.get('', getMoviesControllers)

userRoutes.post('', ensureBody(userSchemaSignIn), ensureEmail, createUserController)

loginRoutes.post('', ensureBody(userSchemaLogin), loginUserController)

loginRoutes.post('', getUserController)
export {movieRoutes, userRoutes, loginRoutes}