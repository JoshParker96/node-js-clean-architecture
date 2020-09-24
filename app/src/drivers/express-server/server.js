const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const { port } = require('../../config/').app
const citizenRoutes = require('./routes/citizens/citizenRoutes')

app.use(bodyParser.json())
app.use(citizenRoutes)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})