import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  console.log(users);
  return NextResponse.json({ users, status: 200 });
}
// export async function HEAD(Request) {}
export async function POST(request) {
  let requestBody = await request.json();
  await prisma.user.create({
    data: {
      id: requestBody.id,
      email: requestBody.email,
      firstName: requestBody.firstName,
      middleName: requestBody.middleName,
      lastName: requestBody.lastName,
      unit: requestBody.unit,
      designation: requestBody.designation,
      employeeStatus: requestBody.employeeStatus,
    },
  });
  return NextResponse.json({ status: 200 });
}
// export async function PUT(Request) {}
export async function DELETE(Request) {}
