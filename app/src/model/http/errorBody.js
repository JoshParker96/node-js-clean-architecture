module.exports = class ErrorBody {
  constructor(isSuccess, message, detailedMessage, path) {
    this.isSuccess = isSuccess
    this.message = message
    this.detailedMessage = detailedMessage
    this.path = path
  }
}