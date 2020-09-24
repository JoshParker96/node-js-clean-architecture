module.exports = class SuccessBody {
  constructor(isSuccess, message, data) {
    this.isSuccess = isSuccess
    this.message = message
    this.data = data
  }
}