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
    res.send('hello world')
})


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
        if (exists === true) {
            res.send({ "login": true })
        }
        else {
            res.send({ "login": false })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
})

// send data like this: {"email": "your email", "password": "your password" }
//returns either 
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
        res.json({ "newuser": { email }, "successful": true, "message": "new account created" })

        //const users = await prisma.user.findMany()
        //res.json(users)
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        })
    }
})
