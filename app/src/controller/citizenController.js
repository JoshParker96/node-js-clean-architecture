const { HttpResponse , SuccessBody } = require("../model/http/")

module.exports = (citizenService) => {

  const getAllCitizens = async (req, res) => {
    const successMessage = 'Successfully retrieved all citizens'
    const path = req.path

    return await citizenService.getAllCitizens()
      .then(citizens => sendSuccessfulResponse(200, successMessage, citizens))
      .catch(err => res.json(err))
  }

  const sendSuccessfulResponse = async (statusCode, message, data) => {
    const successBody = new SuccessBody(true, message, data)
    return Promise.resolve(new HttpResponse(statusCode, {}, successBody))
  }

  return {
    getAllCitizens
  }
}