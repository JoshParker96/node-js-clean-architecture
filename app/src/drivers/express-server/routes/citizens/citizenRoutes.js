const express = require('express')
const { CitizenController } = require('../../../../controller/')
const router = express.Router()

router.get('/citizens', async (req, res) => {
  const mockUserService = {
    getAllCitizens: async () => {
      return Promise.resolve([{name: 'hello hello hello'}])
    }
  }
  const citizensController = CitizenController(mockUserService)
  const response = await citizensController.getAllCitizens(req, res)
  res.status(200).send(response)
})

module.exports = router