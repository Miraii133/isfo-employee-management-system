 import script from '@/../server/script'
 export async function GET(Request) {
    script()
    return new Response("Truly a based moment")
 
}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}