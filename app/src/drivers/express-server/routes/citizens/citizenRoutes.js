const express = require('express')
const router = express.Router()

const { citizenController } = require('../../../../containers/')
const { HttpRequest } = require('../../../../model/http/')

router.get('/citizens', async (req, res) => {
  const httpRequest = new HttpRequest(req.body, req.headers, req.path)
  const response = await citizenController.getAllCitizens(httpRequest)
  for (const [key, value] of Object.entries(response.headers)) {
    res.set(key, value)
  }
  res.status(response.statusCode).send(response.body)
})

module.exports = router