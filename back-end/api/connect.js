import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://vinicius:vini160107@cluster0.2lhr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log(URI);

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();
