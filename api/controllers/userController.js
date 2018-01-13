var { User } = require('../models/user')
var output = require('../../lib/output')
var { validateAll } = require('indicative')

var rules = {
  name: 'required',
  age: 'required',
  email: 'required|email'
}

module.exports = {
  collection(req, res, next) {
    let user = new User
    user.all()
      .then(data => {
        let body = output.success(data, 'Success', 200)
        res.json(body)
      }, error => {
        next(error)
      })
  },

  store(req, res, next) {
    validateAll(req.body, rules)
      .then(() => {
        let user = new User
        user.create(req.body)
          .then(data => {
            let body = output.success(null, 'User added successfully', 200)
            res.json(body)
          }, error => {
            next(error)
          })
      }, error => {
        next({ httpCode: 422, message: 'User Not Found', body: error })
      })
  },

  item(req, res, next) {
    let user = new User
    user.find(req.params.id)
      .then(data => {
        if (data.length) {
          let body = output.success(data, 'Success', 200)
          res.json(body)
        } else {
          next({ httpCode: 404, message: 'User Not Found' })
        }
      }, error => {
        next(error)
      })
  },

  update(req, res, next) {
    validateAll(req.body, rules)
      .then(() => {
        let user = new User
        user.update(req.params.id, req.body)
          .then(data => {
            if (data.affectedRows) {
              let body = output.success(null, 'User updated successfully', 200)
              res.json(body)
            } else {
              next({ httpCode: 404, message: 'User Not Found' })
            }
          }, error => {
            next(error)
          })
      }, error => {
        next({ httpCode: 422, message: 'User Not Found', body: error })
      })
  },

  delete(req, res, next) {
    let user = new User
    user.delete(req.params.id)
      .then(data => {
        if (data.affectedRows) {
          let body = output.success(null, 'User deleted successfully', 200)
          res.json(body)
        } else {
          next({ httpCode: 404, message: 'User Not Found' })
        }
      }, error => {
        next(error)
      })
  },
}
