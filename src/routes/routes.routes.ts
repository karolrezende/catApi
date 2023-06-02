import { Router } from "express";
import { getMoviesControllers } from "../controllers/movies.controllers";
import { ensureBody } from "../middlewares/ensureBody.middlewares";
import { userSchemaLogin, userSchemaSignIn } from "../schemas/user.schemas";
import { ensureEmail } from "../middlewares/ensureEmail.middlewares";
import { createUserController, getUserController, loginUserController } from "../controllers/user.controllers";
import { ensureToken } from "../middlewares/ensureToken.middlewares";

const movieRoutes: Router = Router()
const userRoutes: Router = Router()
const loginRoutes: Router = Router()
const getUserRoutes: Router = Router()

movieRoutes.get('', getMoviesControllers)

getUserRoutes.get('', ensureToken, getUserController)

userRoutes.post('', ensureBody(userSchemaSignIn), ensureEmail, createUserController)

loginRoutes.post('', ensureBody(userSchemaLogin), loginUserController)

loginRoutes.post('', getUserController)
export {movieRoutes, userRoutes, loginRoutes, getUserRoutes}