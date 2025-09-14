import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/server/db/mongodb';

export async function GET() {
  try {
    const connection = await connectToDatabase();
    
    if (!connection) {
      return NextResponse.json(
        { status: 'error', message: 'MongoDB not available' },
        { status: 503 }
      );
    }
    
    const { db } = connection;
    
    // Try to list all collections to verify connection
    const collections = await db.listCollections().toArray();
    
    return NextResponse.json({
      status: 'success',
      message: 'Successfully connected to MongoDB',
      collections: collections.map(c => c.name)
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to connect to MongoDB' },
      { status: 500 }
    );
  }
} 