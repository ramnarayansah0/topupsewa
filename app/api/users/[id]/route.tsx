import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";

// Helper function to extract ID from the URL
function extractIdFromUrl(request: NextRequest): number | null {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop(); // Extract the last part of the URL
  const parsedId = parseInt(id || "", 10);
  return isNaN(parsedId) ? null : parsedId;
}

// GET method
export async function GET(request: NextRequest) {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST method
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    

    const newProject = await prisma.project.create({
      data: {
        price: body.price,
        playerid: body.playerid
       
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

// PUT method
export async function PUT(request: NextRequest) {
  try {
    const id = extractIdFromUrl(request);
    if (id === null) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const body = await request.json();
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        price: body.price,
        playerid: body.playerid,
      },
    });
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE method
export async function DELETE(request: NextRequest) {
  try {
    const id = extractIdFromUrl(request);
    if (id === null) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Project successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}