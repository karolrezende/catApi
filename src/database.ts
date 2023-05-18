import { Client } from "pg";

const client = new Client({
    user: 'postgres',
    password: 'karol123',
    database: 'catflix',
    host: 'localhost',
    port: 5432
})

const startDatabase = async () =>{
    await client.connect()
    console.log('Conexão bem sucedida!')
}

export {client, startDatabase}