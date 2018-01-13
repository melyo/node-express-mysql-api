var db = require('../../lib/database')
var { Model } = require('../../lib/model')

class User extends Model {
  constructor() {
    let table = 'users'

    let fillable = [
      'name',
      'age',
      'email'
    ]

    super(table, fillable)
  }
}

module.exports = {
  User: User
}
