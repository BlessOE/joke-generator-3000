import Cors from 'cors';
import Express from 'express';
import { Db, MongoClient, ServerApiVersion } from 'mongodb';
//import axios from 'axios';

const app = Express();
const port = 7000;

app.use(Express.json());
app.use(Cors());

const DB_PASSWORD = "RTPwqCKitGz4PXPl";
const CONNECTION_STRING = `mongodb+srv://admin:${DB_PASSWORD}@cluster0.oljjaad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const DATABASENAME = "Jokes";
const COLLECTION = "JokesCollection"
//const API_URL = "http://localhost:7000/api/getnewjoke";

let database: Db;

// Create a MongoClient with a MongoClientOptions object to set the stable API version
const client = new MongoClient(CONNECTION_STRING, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Send ping to confirm successful connection
    await client.db(DATABASENAME).command({ ping: 1 });
    database = client.db(DATABASENAME);
    console.log("\nClient is connected!\n");

    app.get('/api/getnewjoke', async (request, response) => {
      try {
        const result = await database.collection(COLLECTION).find({}).toArray();
        response.json(result);
      } catch (err) {
        console.error(err);
        response.status(500).send('Error fetching data');
      }
    });

    // start the server
    await app.listen(port, () => {
      console.log(`Server is running on port ${port}\n`);
    });



  } catch (err) {
    console.error("Error connecting to the db", err);
  }
}

run().catch(console.dir);

//export const fetchJokes = async (): Promise<string> => {
//  try {
//    const response = await axios.get(API_URL);
//    return response.data;
//  } catch (err) {
//    console.error(`Error fetching jokes: ${err}`);
//    throw err;
//  }
//}
