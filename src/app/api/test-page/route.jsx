 import { getFromDB, addToDB, deleteFromDB, updateToDB} from '@/../server/script'
import { NextResponse } from 'next/server'
 export async function GET(Request) {
    let value = await getFromDB()
    return NextResponse.json({message: {value}, status:'400'})
}
// export async function HEAD(Request) {}
 export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}