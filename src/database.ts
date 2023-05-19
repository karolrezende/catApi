import { Client } from "pg";

const client = new Client({
    user: 'karol',
    password: 'EetwB3UojSfE6DPcPoqtBhpd0fl6QaHe',
    database: 'catflix',
    host: 'dpg-chjr7l8rddlddrhed8kg-a',
    port: 5432
})

const startDatabase = async () =>{
    await client.connect()
    console.log('Conexão bem sucedida!')
}

export {client, startDatabase}