import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
    await prisma.user.create({

        data: {

            username: 'Markus Andersson',

            email: 'markus.andersson@abbgymnasiet.se',

            password: 'abc',

        },

    })
}


main()

    .then(async () => {

        await prisma.$disconnect()

    })

    .catch(async (e) => {

        console.error(e)

        await prisma.$disconnect()

        process.exit(1)

    })