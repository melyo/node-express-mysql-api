let user = require('./controllers/userController')

module.exports = (app) => {

  app.get('/users', user.collection)
  app.post('/users', user.store)
  app.get('/users/:id', user.item)
  app.patch('/users/:id', user.update)

}
