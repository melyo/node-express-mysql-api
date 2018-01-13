var db = require('../../lib/database')
var { Model } = require('../../lib/model')

class User extends Model {
  constructor() {
    super()
    this.table = 'users'
  }
}

module.exports = {
  User: User
}
