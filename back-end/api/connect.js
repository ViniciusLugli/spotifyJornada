import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.VITE_URI;
console.log(URI);

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();
