import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!process.env.MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable');
}

interface MongoConnection {
  client: MongoClient;
  db: Db;
}

interface GlobalMongo {
  conn: MongoConnection | null;
  promise: Promise<MongoConnection | null> | null;
}

declare global {
  interface GlobalThis {
    mongo: GlobalMongo;
  }
}

const mongo = (globalThis as unknown as { mongo: GlobalMongo }).mongo;

if (!mongo) {
  (globalThis as unknown as { mongo: GlobalMongo }).mongo = { conn: null, promise: null };
}

const cached = (globalThis as unknown as { mongo: GlobalMongo }).mongo;

export async function connectToDatabase(): Promise<MongoConnection | null> {
  // Check if MongoDB URI is available
  if (!process.env.MONGODB_URI || !process.env.MONGODB_DB) {
    console.warn('MongoDB environment variables not set, running without database');
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      maxPoolSize: 10,
      minPoolSize: 5,
    };

    cached.promise = MongoClient.connect(process.env.MONGODB_URI!, opts).then((client) => {
      return {
        client,
        db: client.db(process.env.MONGODB_DB),
      };
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      console.warn('Continuing without database connection');
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch {
    cached.promise = null;
    console.warn('Failed to connect to MongoDB, continuing without database');
    return null;
  }
} 