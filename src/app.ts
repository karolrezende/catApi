import express, { Application, json } from 'express'
import { startDatabase }from './database'
import { createUser, getMovies } from './logics/movies.logics'
const app: Application = express()
app.use(json())
app.get('/movies', getMovies)
app.post('/user', createUser)

app.listen(3000, async ()=>{
    console.log("Servidor iniciado!")
    await startDatabase()
})