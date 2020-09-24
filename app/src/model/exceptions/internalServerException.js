module.exports = class InternalServerException extends Error {
  constructor(error, message) {
    super(error)
    this.message = message
  }
}