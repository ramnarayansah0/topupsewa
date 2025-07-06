import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 200 }));
}

// GET: Fetch all users
export async function GET(request: NextRequest) {
  try {
    console.log('GET request received');
    
    try {
      await prisma.$connect();
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return corsResponse(NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      ));
    }

    const users = await prisma.project.findMany({
      orderBy: {
        id: 'desc'
      }
    });

    console.log('Fetched users:', users);
    
    if (!users) {
      return corsResponse(NextResponse.json(
        { error: "No users found" },
        { status: 404 }
      ));
    }

    return corsResponse(NextResponse.json(users));
  } catch (error) {
    console.error('Error fetching users:', error);
    return corsResponse(NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    ));
  } finally {
    await prisma.$disconnect();
  }
}

// POST: Create a new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('POST request received with data:', body);

    if (!body.price || !body.playerid || !body.names || !body.whatsapp) {
      console.log('Missing required fields:', { body });
      return corsResponse(NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      ));
    }

    if (typeof body.price !== 'string' || typeof body.playerid !== 'string' || 
        typeof body.names !== 'string' || typeof body.whatsapp !== 'string') {
      console.log('Invalid data types:', { body });
      return corsResponse(NextResponse.json(
        { error: "Invalid data types" },
        { status: 400 }
      ));
    }

    if (!/^\d+$/.test(body.whatsapp)) {
      console.log('Invalid WhatsApp format:', body.whatsapp);
      return corsResponse(NextResponse.json(
        { error: "Invalid WhatsApp number format" },
        { status: 400 }
      ));
    }

    // Fix: Extract numeric part from price string
    // Note: Price is already a string, no extraction needed

    console.log('Creating order with data:', body);
    const user = await prisma.project.create({
      data: {
        price: body.price,
        playerid: body.playerid,
        names: body.names,
        whatsapp: body.whatsapp
      }
    });

    console.log('Order created successfully:', user);
    return corsResponse(NextResponse.json({
      message: "Order created successfully",
      order: user
    }, { status: 201 }));
  } catch (error: any) {
    console.error('Error creating order:', error);

    if (error.code === 'P2002') {
      return corsResponse(NextResponse.json(
        { error: "Duplicate entry" },
        { status: 409 }
      ));
    }

    return corsResponse(NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    ));
  }
}
