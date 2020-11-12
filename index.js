const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.get('/hello', (req, res) => {    
    let name = req.cookies.name
    name ?  
    res.send(`Welcome ${name}!`) :
    res.send(`You're not logged in`)
})

app.post('/login', (req, res) => {
    let user = req.body
    let result

    if (user.name) {
        result = {
            "status": "success",
            "message": "You're logged in"
        }
    } else {
        result = {
            "status": "failure",
            "message": "You have not logged in"
        }
        res.status(404).json(result)
    } 

    res.cookie('name', user.name)
    res.json(result)
})

app.listen(8080)