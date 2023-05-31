import express, { Application, json } from 'express'
import 'express-async-errors'
import { loginRoutes, movieRoutes, userRoutes } from './routes/routes.routes'
import { handleErrors } from './errors'
const app: Application = express()

app.use(json())

app.use('/movies', movieRoutes)
app.use('/users', userRoutes)
app.use('/login', loginRoutes)

app.use(handleErrors)
export default app