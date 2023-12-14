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

export async function PATCH(request, {params}){
     let requestBody = await request.json();
     //console.log('emp',employeeId)
    await prisma.user.update(
        {
            where: {
                id: parseInt(requestBody.id),
            },
            data: {
                id: requestBody.id,
                email: requestBody.email,
                firstName: requestBody.firstName,
                middleName: requestBody.middleName,
                lastName: requestBody.lastName,
                designation: requestBody.designation,
                employeeStatus: requestBody.employeeStatus 
            }
        }
       
    )
    return NextResponse.json({status:200})
}