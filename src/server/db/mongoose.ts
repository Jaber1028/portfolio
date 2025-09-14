import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

global.mongoose = cached;

export async function connectMongoose() {
  if (!MONGODB_URI) {
    console.warn('MongoDB URI not set, skipping mongoose connection');
    return null;
  }

  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).catch((error) => {
      console.error('Mongoose connection error:', error);
      console.warn('Continuing without mongoose connection');
      return null;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
} 