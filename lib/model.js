var db = require('./database')

class Model {
  constructor(name) {
    this.table = name
  }

  all() {
    return new Promise((resolve, reject) => {
      db.execute(`SELECT *  FROM ${this.table}`)
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }

  find(id) {
    return new Promise((resolve, reject) => {
      db.execute(`SELECT *  FROM ${this.table} WHERE id = ?`, [id])
        .then((data) => {
          if (data.length) {
            resolve(data)
          } else {
            reject({ httpCode: 404, message: 'User Not Found' })
          }
          resolve(data)
        })
        .catch((error) => { reject(error) })
    })
  }
}

module.exports = {
  Model: Model
}
