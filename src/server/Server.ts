import Cors from 'cors';
import Express from 'express';
import { Db, MongoClient, ServerApiVersion } from 'mongodb';
//import axios from 'axios';

const app = Express();
const port = 7000;

app.use(Express.json());
app.use(Cors());

const DB_USERNAME = username;
const DB_PASSWORD = password;
const CONNECTION_STRING = connection_string;
const DATABASENAME = db_name;
const COLLECTION = collection;

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
