var { User } = require('../models/user')
var output = require('../../lib/output')

function getAll(req, res, next) {
  let user = new User
  user.all()
    .then(data => {
      let body = output.success(data, 'Success', 200)
      res.json(body)
    })
    .catch(error => {
      next(error)
    })
}

module.exports = {
  getAll: getAll
}
