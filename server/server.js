const express = require('express')
const cors = require('cors')

const app = express()
const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")

const requestApi = require('request')
const url = "https://dog.ceo/api/breeds/image/random"

// CORS support
app.use(
  cors({
    origin: [/localhost/],
  })
)

/* Add your routes here */

// Default route
const defaultRoute = express.Router()
defaultRoute.get('/', (req, res) => {
  res.json({
    message: 'This is the message from the server!',
  })
})

// Dogs route
const dogsRoute = express.Router()
dogsRoute.get('/', (req, res) =>{
  requestApi.get(url, (error, output, body) => {
    const dog = JSON.parse(body)
    res.json(dog.message)
  })
})

app.use('/', defaultRoute)
app.use('/dogs', dogsRoute)

// Start server
app.listen(3000)
