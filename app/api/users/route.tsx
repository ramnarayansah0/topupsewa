import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Fetch all users
export async function GET(request: NextRequest) {
  try {
    const users = await prisma.project.findMany({
      orderBy: {
        id: 'desc'
      }
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// POST: Create a new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received data:', body); // Debug log

    if (!body.price || !body.playerid || !body.names || !body.whatsapp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.project.create({
      data: {
        price: body.price,
        playerid: body.playerid,
        names: body.names,
        whatsapp: body.whatsapp
      }
    });

    console.log('Created user:', user); // Debug log
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error); // Debug log
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}