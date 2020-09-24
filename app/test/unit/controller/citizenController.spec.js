const assert = require('chai').assert

const { CitizenController } = require('../../../src/controller/')
const { HttpResponse, SuccessBody, ErrorBody } = require('../../../src/model/http/')
const { InternalServerException } = require('../../../src/model/exceptions/')

describe('User Controller Unit Tests', () => {
  describe('#getAllCitizens()', () => {
    it('isSucessful_returnsCorrectResponse', async () => {
      const citizens = [{name: 'hello'}]
      const req = { path: '/citizens' }
      const mockUserService = {
        getAllCitizens: async () => {
          return Promise.resolve(citizens)
        }
      }
  
      const citizenController = CitizenController(mockUserService)
      const actual = await citizenController.getAllCitizens(req)
  
      const expected = {
        statusCode: 200,
        headers: [{ "Content-Type": 'application/json' }],
        body: { isSuccess: true, message: 'Successfully retrieved all citizens', data: citizens }
      }
      assert.deepEqual(actual, expected)
      assert.instanceOf(actual, HttpResponse)
      assert.instanceOf(actual.body, SuccessBody)
    })
    it('internalServerError_returnsCorrectResponse', async () => {
      const path = '/citizens'
      const errorMessage = 'Internal server error'
      const req = { path }
      const mockUserService = {
        getAllCitizens: async () => {
          throw new InternalServerException(new Error(), errorMessage)
        }
      }
  
      const citizenController = CitizenController(mockUserService)
      const actual = await citizenController.getAllCitizens(req)
      
      const expected = {
        statusCode: 500,
        headers: [{ "Content-Type": 'application/json' }],
        body: { isSuccess: false, message: errorMessage, detailedMessage: 'detailed message', path }
      }
      assert.deepEqual(actual, expected)
      assert.instanceOf(actual, HttpResponse)
      assert.instanceOf(actual.body, ErrorBody)
    })
  })
})