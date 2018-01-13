var { User } = require('../models/user')
var output = require('../../lib/output')

module.exports = {
  collection(req, res, next) {
    let user = new User
    user.all()
      .then(data => {
        let body = output.success(data, 'Success', 200)
        res.json(body)
      })
      .catch(error => {
        next(error)
      })
  },

  item(req, res, next) {
    let user = new User
    user.find(req.params.id)
      .then(data => {
        let body = output.success(data, 'Success', 200)
        res.json(body)
      })
      .catch(error => {
        next(error)
      })
  }
}
