var output = require('./output')

module.exports = (app) => {

  app.use((err, req, res, next) => {
    if (!err.httpCode) {
      err.httpCode = 500
    }
    let body = output.error(err.body, err.message, err.httpCode)
    res.status(err.httpCode).json(body)
  })

  app.use((req, res, next) => {
    let body = output.error(null, 'Not Found', 404)
    res.status(404).json(body)
  })

}
