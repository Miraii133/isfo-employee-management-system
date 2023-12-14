import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getFromDB(){
    const users = await prisma.user.findMany()
    return users;
}

export async function addToDB(Employee){
const user = await prisma.user.create({
    data: {
      firstName: 'Jiyo',
      middleName: 'Nercuit',
      lastName: 'Valmoria',
      unit: 'CS',
      designation: 'Academic Faculty',
      employeeStatus: 'Active',
    },
  }
  )
   return 200
}

export async function updateToDB(){

}

export async function deleteFromDB(){

}
