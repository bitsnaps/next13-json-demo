/*import { MongoClient, ServerApiVersion } from 'mongodb';

const MONGODB_URI =
  'mongodb+srv://promexia_mongo:GEiYc0OF9cSpvJE9@promexiac0.x9u0t5h.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);
*/

export default async function getNotes() {
  //await run().catch(console.dir);
  return [];
}
