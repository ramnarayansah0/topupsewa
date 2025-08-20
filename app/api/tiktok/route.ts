import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const entry = await prisma.tiktok.create({
      data: {
        videoslink: body.videoslink,
        naam: body.naam,
        rate: body.rate,
        whatsapp: body.whatsapp
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
    const entries = await prisma.tiktok.findMany({
      orderBy: { id: 'desc' },
    });
    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
}