const { assert } = require('chai')

const { CitizenService } = require('../../../src/services/')
const { InternalServerException } = require('../../../src/model/exceptions/')

describe('Citizen Service Unit Tests', () => {
  describe('#getAllCitizens()', () => {
    it('isSucessful_returnsAllCitizens', async () => {
      const citizens = [{name: 'josh', age: 24}, {name: 'codie', age: 28}]
      const mockCitizenRepository = {
        getAll: async () => {
          return Promise.resolve(citizens)
        }
      }

      const citizenService = CitizenService(mockCitizenRepository)
      const actual = await citizenService.getAllCitizens()

      assert.deepEqual(actual, citizens)
    })
    it('internalServerError_throwsCorrectException', async () => {
      const errorMessage = 'Internal server error'
      const mockCitizenRepository = {
        getAll: async () => {
          throw new InternalServerException(new Error(), errorMessage)
        }
      }

      const citizenService = CitizenService(mockCitizenRepository)

      try {
        await citizenService.getAllCitizens()
      } catch(err) {
        assert.equal(err.message, errorMessage)
        assert.instanceOf(err, InternalServerException)
      }
    })
  })
})