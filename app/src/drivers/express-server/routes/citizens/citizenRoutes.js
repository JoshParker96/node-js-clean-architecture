const express = require('express')
const router = express.Router()

const { CitizenController } = require('../../../../controller/')
const { CitizenService } = require('../../../../services/')
const { HttpRequest } = require('../../../../model/http/')

router.get('/citizens', async (req, res) => {
  const mockCitizenRepository = {
    getAll: async () => Promise.resolve([{name: 'hello hello hello helloooo' + Math.random()}])
  }
  const citizenService = CitizenService(mockCitizenRepository)
  const citizenController = CitizenController(citizenService)
  const httpRequest = new HttpRequest(req.body, req.headers, req.path)
  const response = await citizenController.getAllCitizens(httpRequest)
  for (const [key, value] of Object.entries(response.headers)) {
    res.set(key, value)
  }
  res.status(response.statusCode).send(response.body)
})

module.exports = router