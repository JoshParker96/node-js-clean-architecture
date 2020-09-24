const assert = require('chai').assert

const { CitizenController } = require('../../../src/controller/')
const { HttpResponse, SuccessBody } = require('../../../src/model/http/')

describe('User Controller', () => {
  it('givenGetAllCitizensRequest_isSucessful_returnsCorrectResponse', async () => {
    const citizens = [{name: 'hello'}]

    const mockUserService = {
      getAllCitizens: async () => {
        return Promise.resolve(citizens)
      }
    }

    const successBody = new SuccessBody(true, 'Successfully retrieved all citizens', citizens)
    const expected = new HttpResponse(200, {}, successBody)

    const req = { path: '/citizens' }

    const citizenController = CitizenController(mockUserService)
    const actual = await citizenController.getAllCitizens(req, {})
    
    assert.deepEqual(actual, expected)
  })
})