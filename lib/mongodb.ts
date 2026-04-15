import { MongoClient, type Db, type MongoClientOptions } from "mongodb";

/**
 * MongoDB connection helper.
 *
 * Set MONGODB_URI in your .env.local file. We cache the client across hot
 * reloads in development so we don't exhaust connections.
 */

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "aplus_csr";

const options: MongoClientOptions = {};

let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local before using the database."
    );
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    const client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

export default getClientPromise;
