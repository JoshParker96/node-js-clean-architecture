module.exports = class HttpResponse {
  constructor(statusCode, headers, httpBody) {
    this.statusCode = statusCode
    this.headers = headers
    this.httpBody = httpBody
  }
}