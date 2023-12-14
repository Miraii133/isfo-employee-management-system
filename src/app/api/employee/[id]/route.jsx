 import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
 
 export async function GET(request, {params}) {
    let employeeId = params.id
    const users = await prisma.user.findFirst(
        {
            where: {
                id: parseInt(employeeId),
            }
        }
       
    )
    return NextResponse.json({users, status:200})
}