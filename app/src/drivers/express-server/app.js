const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const citizenRoutes = require('./routes/citizens/citizenRoutes')

app.use(bodyParser.json())
app.use(citizenRoutes)

app.listen(3000, () => {
  console.log('Listening on port ' + 3000)
})