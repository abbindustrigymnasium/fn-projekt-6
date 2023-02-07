import express from 'express'
const app = express()
var cors = require('cors')
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

app.get('/', (req: any, res: any) => {
    res.send(`hello from port: ${PORT}`)
})

//send data like this: {"email": "your email", "password": "your password" }
app.post("/login", async (req: any, res: any) => {
    try {
        const { email, password } = req.body
        const exists = !!await prisma.user.findFirst(
            {
                where: {
                    email: email,
                    password: password
                }
            }
        )
        let user = await prisma.user.findFirst(
            {
                where: {
                    email: email,

                    password: password
                }
            }
        )
        if (exists === true) {
            res.send({ "login": true, "userdata": user })
        }
        else {
            res.send({ "login": false, "userdata": user })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
})

// send data like this: {"email": "your email", "password": "your password" }
app.post("/signup", async (req: any, res: any) => {
    try {
        const { email, password } = req.body
        const exists = !!await prisma.user.findFirst(
            {
                where: {
                    email: email,
                }
            }
        )
        if (exists === true) {
            res.send({ "newuser": { email }, "successful": false, "message": "account with email alredy exists" })
            return
        }

        const user = await prisma.user.create({

            data: {

                email: email,

                password: password,


            },

        })
        let newuser = await prisma.user.findFirst(
            {
                where: {
                    email: email,

                    password: password
                }
            }
        )
        res.json({ "newuser": { newuser }, "successful": true, "message": "new account created" })
    } catch (error) {
        res.status(500).json({
            message: `error(${error})`,
        })
    }
})
//send data like this {"id": 1}
app.post("/getuserbyid", async (req: any, res: any) => {
    try {
        const id = req.body
        console.log(id)
        const user = await prisma.user.findFirst(
            {
                where: {
                    id: id.id
                }
            }
        )
        res.json(user)
    } catch (error) {
        res.send(error)
    }

})
app.post("/addbalance", async (req: any, res: any) => {
    const addbalance = req.body.balance
    const addid = req.body.id
    const user = await prisma.user.findFirst(
        {
            where: {
                id: addid
            }
        }
    )
    const initbalance = user
    const data = await prisma.user.update({
        where: {
            id: addid
        },
        data: {
            //?
        }
    })

})

app.post("/withdraw", async (req: any, res: any) => {
})

//works but prisma says error
app.get("/leaderboards", async (req: any, res: any) => {
    const users = await prisma.user.findMany({
        orderBy: [
            {
                donated: 'desc',
            },
        ],
    })
    res.send(users)
})

app.get("/allusers", async (req: any, res: any) => {
    const users = await prisma.user.findMany()
    res.send(users)
})