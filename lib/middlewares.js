var bodyParser = require('body-parser')

module.exports = (app) => {

  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(function (req, res, next) {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`)
    next()
  })

}
