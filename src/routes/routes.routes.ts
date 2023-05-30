import { Router } from "express";
import { getMoviesControllers } from "../controllers/movies.controllers";
import { ensureBody } from "../middlewares/ensureBody.middlewares";
import { userSchemaSignIn } from "../schemas/user.schemas";
import { ensureEmail } from "../middlewares/ensureEmail.middlewares";
import { createUserController } from "../controllers/user.controllers";

const movieRoutes: Router = Router()
const userRoutes: Router = Router()

movieRoutes.get('', getMoviesControllers)
userRoutes.post('', ensureBody(userSchemaSignIn), ensureEmail, createUserController)

export {movieRoutes, userRoutes}