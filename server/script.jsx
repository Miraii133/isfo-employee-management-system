import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function main() {
   /*const user = await prisma.user.create({
    data: {
      name: 'bob',
      email: 'alice@asdasd.io',
    },
  })*/
  const users = await prisma.user.findMany()
  console.log(users)
}

/*main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })*/

