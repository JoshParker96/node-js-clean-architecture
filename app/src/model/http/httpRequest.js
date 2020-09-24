module.exports = class HttpResponse {
  constructor(body, headers, path) {
    this.body = body
    this.headers = headers
    this.path = path
  }
}