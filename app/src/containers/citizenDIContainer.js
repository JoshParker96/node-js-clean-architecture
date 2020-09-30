const { CitizenService } = require('../services/')
const { CitizenController } = require('../controller/')

const mockCitizenRepository = { getAll: () => Promise.resolve([{name: 'joshua'}]) }
const citizenService = CitizenService(mockCitizenRepository)
const citizenController = CitizenController(citizenService)

module.exports = { citizenController }