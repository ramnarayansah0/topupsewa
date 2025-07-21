import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const entry = await prisma.pubg.create({
      data: {
        gamesid: body.gamesid,
        naam: body.naam,
        rate: body.rate,
        message: body.message
      }
    });
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: "Failed to create entry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log('Starting GET request to /api/pubg');
    
    // Test database connection first
    await prisma.$connect();
    console.log('Database connected successfully');
    
    const entries = await prisma.pubg.findMany({
      select: {
        ids: true,
        gamesid: true,
        naam: true,
        rate: true,
        message: true
      }
    });
    
    console.log(`Found ${entries.length} entries`);
    
    // Transform the data to match the expected interface
    const transformedEntries = entries.map(entry => ({
      id: entry.ids,
      gamesid: entry.gamesid,
      naam: entry.naam,
      rate: entry.rate,
      message: entry.message,
      createdAt: new Date().toISOString() // Use current date since schema doesn't have createdAt
    }));
    
    console.log('Data transformed successfully');
    return NextResponse.json(transformedEntries, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: "Failed to fetch entries", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  } finally {
    try {
      await prisma.$disconnect();
      console.log('Database disconnected successfully');
    } catch (disconnectError) {
      console.error('Error disconnecting from database:', disconnectError);
    }
  }
} 