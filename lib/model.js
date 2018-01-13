var db = require('./database')

class Model {
  constructor() {
    this.table = ''
  }

  all() {
    return new Promise((resolve, reject) => {
      db.execute('SELECT *  FROM '+this.table, [])
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }
}

module.exports = {
  Model: Model
}
