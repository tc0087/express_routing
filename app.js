const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = ('./routes/admin')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

const server = http.createServer(app)

server.listen(3000)