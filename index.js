var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/hello', function(req, res) {    
    if(req.cookies.name !== undefined) {  
        res.send(`Welcome ${req.cookies.name}!`)
    } else {
        res.send('Looks like no cookie was set...')
    }
})

app.get('/login', function(req, res) {
    res.cookie('name', 'Emily').send('Cookie is set!')
})

app.listen(8080)