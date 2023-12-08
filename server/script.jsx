import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getFromDB(){
    const users = await prisma.user.findMany()
    return users;
}

export async function addToDB(){
/*const user = await prisma.user.create({
    data: {
      name: 'bob',
      email: 'alice@asdasd.io',
    },
  })*/
}

export async function updateToDB(){

}

export async function deleteFromDB(){

}
