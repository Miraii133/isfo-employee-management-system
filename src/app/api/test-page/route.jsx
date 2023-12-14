import { getFromDB, addToDB, deleteFromDB, updateToDB} from '@/../server/script'
import { NextResponse } from 'next/server'
 export async function GET(Request) {
    let value = await getFromDB()
    return NextResponse.json({message: {value}, status:200})
}
// export async function HEAD(Request) {}
 export async function POST(Request) {
    return NextResponse.json({status: 200})
 }
// export async function PUT(Request) {}
export async function DELETE(Request) {
    l
}