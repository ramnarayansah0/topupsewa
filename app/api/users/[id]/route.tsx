import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";


// This is for GET METHODddd
export async function GET(request:NextRequest)
{
  const user =await prisma.project.findMany()
  
    return NextResponse.json(user)}

    //post
    export async function POST(request:NextRequest){
        const body= await request.json()
        const user = await prisma.project.create({
            data: {
                price:body.price,
                playerid:body.playerid,
                names:body.names,
                whatsapp:body.whatsapp
            }
        });
       
        return NextResponse.json(user)
    }