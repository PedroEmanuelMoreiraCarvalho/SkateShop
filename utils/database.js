import { MongoClient } from "mongodb";

const database_url = process.env.DATABASE_URL

const client = new MongoClient(database_url, {
    useNewUrlParser:  true,
    UseUnifiedTopology: true
})

export default async function connect(){
    await client.connect()
    const db = client.db("Skateshop")
    return {db, client}
}
