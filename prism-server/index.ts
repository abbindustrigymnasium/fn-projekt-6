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
    } catch (e) {
        res.json({ "success": false, "error": e })
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

                date: Math.round(Date.now() / 1000)//unix timestamp (seconds)

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
    } catch (e) {
        res.json({ "success": false, "error": e })
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
    } catch (e) {
        res.json({ "success": false, "error": e })
    }

})

//send request like this{"id": 8, "balance": -1439082} positive to add and negative to remove
app.post("/changebalance", async (req: any, res: any) => {
    try {
        var addbalance = req.body.balance// to make it accesseble in whole post as vars are accesseble one level higher than they are defined
        const addid = req.body.id
        const user = await prisma.user.findFirst(
            {
                where: {
                    id: addid
                }
            }
        )
        const initbalance = user?.balance
        const sendbalance = (initbalance + addbalance)
        if (addbalance < 0) {
            if (sendbalance < 0) {
                res.json({ "message": "not enough money" })
            } else {
                const user = await prisma.user.findUnique({
                    where: {
                        id: addid
                    }
                })
                const initwonbal = user?.won
                const newwonlostbal = initwonbal + addbalance
                const editwonbal = await prisma.user.update({
                    where: {
                        id: addid
                    },
                    data: {
                        donated: newwonlostbal
                    }
                })
                const data = await prisma.user.update({
                    where: {
                        id: addid
                    },
                    data: {
                        balance: sendbalance
                    }
                })
                const currentbal = await prisma.user.findFirst({
                    where: {
                        id: addid
                    }
                })
                res.json({ "success": true, "currentbal": currentbal?.balance })
                const logpayment = await prisma.payment.create(
                    {
                        data: {
                            paymentammount: addbalance,
                            userid: addid
                        }
                    }
                )
            }

        } else {
            const user = await prisma.user.findUnique({
                where: {
                    id: addid
                }
            })
            const initwonbal = user?.won
            const newwonlostbal = initwonbal + addbalance
            const editwonbal = await prisma.user.update({
                where: {
                    id: addid
                },
                data: {
                    won: newwonlostbal
                }
            })
            const data = await prisma.user.update({
                where: {
                    id: addid
                },
                data: {
                    balance: sendbalance
                }
            })
            const currentbal = await prisma.user.findFirst({
                where: {
                    id: addid
                }
            })
            res.json({ "success": true, "currentbal": currentbal?.balance })
            const logpayment = await prisma.payment.create(
                {
                    data: {
                        paymentammount: addbalance,
                        userid: addid
                    }
                }
            )
        }
    } catch (e) {
        res.json({ "success": false, "error": e })
    }

})

app.get("/paymentlog", async (req: any, res: any) => {
    const payments = await prisma.payment.findMany({

    })
    res.json(payments)
})
app.get("/leaderboarddonate", async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: [
                {
                    donated: 'desc',
                },
            ],
        })
        res.send(users)
    }
    catch (e) {
        res.json({ "success": false, "error": e })
    }
})
app.get("/leaderboardwon", async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: [
                {
                    won: 'desc',
                },
            ],
        })
        res.send(users)
    }
    catch (e) {
        res.json({ "success": false, "error": e })
    }
})
app.get("/leaderboardbalance", async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: [
                {
                    balance: 'desc',
                },
            ],
        })
        res.send(users)
    } catch (e) {
        res.json({ "success": false, "error": e })
    }
})

//{"id":"id", email:"email", "password":"password", "username":"username", "imagelink":"imagelink"}
app.post("/edituser", async (req: any, res: any) => {
    try {
        let id
        let email
        let password
        let username
        let imagelink
        if (req.hasOwnProperty('id')) {
            id = req.id
            res.json({ "message": "you have to send an id in the request" })
        }
        if (req.hasOwnProperty('email')) {
            email = req.email
            const newemail = await prisma.user.update({
                where: {
                    id: id
                }, data: {
                    email: email
                }
            })
            res.send(newemail)
        }
        if (req.hasOwnProperty('password')) {
            password = req.password
            const newpassword = await prisma.user.update({
                where: {
                    id: id
                }, data: {
                    password: password
                }
            })
            res.send(newpassword)
        }
        if (req.hasOwnProperty('username')) {
            username = req.username
            const newusername = await prisma.user.update({
                where: {
                    id: id
                }, data: {
                    username: username
                }
            })
            res.send(newusername)
        }
        if (req.hasOwnProperty('imagelink')) {
            imagelink = req.imagelink
            const newimagelink = await prisma.user.update({
                where: {
                    id: id
                }, data: {
                    imagelink: imagelink
                }
            })
            res.send(newimagelink)
        }

    } catch (e) {
        res.json({ "success": false, "error": e })
    }


})