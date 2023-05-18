import express, { Application } from 'express'
import { startDatabase }from './database'
import { getMovies } from './logics/movies.logics'
const app: Application = express()

app.get('/movies', getMovies)
app.post('/user', ensureUserExists, createUser)

app.listen(3000, ()=>{
    console.log("Servidor iniciado!")
    startDatabase()
})