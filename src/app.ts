import express, { Application, json } from 'express'
import 'express-async-errors'
import { movieRoutes, userRoutes } from './routes/routes.routes'
import { handleErrors } from './errors'
const app: Application = express()

app.use(json())
app.use(handleErrors)

app.use('/movies', movieRoutes)
app.use('/users', userRoutes)

export default app