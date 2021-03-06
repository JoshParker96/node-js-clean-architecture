const { HttpResponse , SuccessBody, ErrorBody } = require("../model/http/")
const { InternalServerException } = require("../model/exceptions")

module.exports = (citizenService) => {

  const getAllCitizens = async (req) => {
    const successMessage = 'Successfully retrieved all citizens'

    return await citizenService.getAllCitizens()
      .then(citizens => constructSuccessfulHttpResponse(200, successMessage, citizens))
      .catch(err => constructUnSuccessfulHttpResponse(500, err, req))
  }

  const constructSuccessfulHttpResponse = (statusCode, message, data) => {
    const successBody = new SuccessBody(true, message, data)
    const headers = [{'Content-Type': 'application/json'}]
    return new HttpResponse(statusCode, headers, successBody)
  }

  const constructUnSuccessfulHttpResponse = (status, err, req) => {
    if (err instanceof InternalServerException) {
      const errorBody = new ErrorBody(false, err.message, 'detailed message', req.path)
      const headers = [{'Content-Type': 'application/json'}]
      return new HttpResponse(status, headers, errorBody)
    }
  }

  return {
    getAllCitizens
  }
}