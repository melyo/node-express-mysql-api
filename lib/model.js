var db = require('./database')

class Model {
  constructor(name, columns) {
    this.table = name || ''
    this.fillable = columns || []
  }

  all() {
    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM ${this.table}`)
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }

  create(body) {
    let col = []
    let val = []
    this.fillable.forEach(field => {
      if (body[field]) {
        col.push(field)
        val.push(body[field])
      }
    })

    return new Promise((resolve, reject) => {
      db.execute(`INSERT INTO ${this.table} (${col.join()}) values ("${val.join('","')}")`)
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }

  find(id) {
    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }

  update(id, body) {
    let sets = []
    this.fillable.forEach(field => {
      if (body[field]) {
        sets.push(field+' = "'+body[field]+'"')
      }
    })

    return new Promise((resolve, reject) => {
      db.execute(`UPDATE ${this.table} SET ${sets} WHERE id = ?`, [id])
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      db.execute(`DELETE FROM ${this.table} WHERE id = ?`, [id])
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }
}

module.exports = {
  Model: Model
}
