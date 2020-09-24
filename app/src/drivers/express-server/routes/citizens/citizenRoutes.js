const express = require('express')
const router = express.Router()

const { CitizenController } = require('../../../../controller/')
const { HttpRequest } = require('../../../../model/http/')

router.get('/citizens', async (req, res) => {
  const mockUserService = {
    getAllCitizens: async () => {
      return Promise.resolve([{name: 'hello hello hello hellooooo'}])
    }
  }
  const citizensController = CitizenController(mockUserService)
  const httpRequest = new HttpRequest(req.body, req.headers, req.path)
  const response = await citizensController.getAllCitizens(httpRequest)
  for (const [key, value] of Object.entries(response.headers)) {
    res.set(key, value)
  }
  res.status(response.statusCode).send(response.body)
})

module.exports = router