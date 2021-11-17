import express from 'express'
import users from './users.mjs'
console.log(users)
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.listen(3000)

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('logged in')
})