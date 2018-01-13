let user = require('./controllers/userController')

module.exports = (app) => {

  app.get('/users', user.collection)
  app.get('/users/:id', user.item)

}
