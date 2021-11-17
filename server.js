import express from 'express'
import users from './users.mjs'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.post('/login', (req, res, next) => {
    let user = req.body.user
    let pass = req.body.pass
    let userDetail
    let userFound = false
    for (userDetail of users) {
        if (userDetail.user == user) {
            userFound = true
            if (userDetail.pass == pass) {
                res.send(`Hi ${user}, you are successfully logged in.`)
            } else {
                res.send(`Incorrect password`)
            }
        }
    }
    // if user not found after looping
    if (!userFound) {
        res.send(`${user} doesn't exist.`)
    }
})


const port = process.env.PORT ||3000
app.listen(port)