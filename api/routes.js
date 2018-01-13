let user = require('./controllers/userController')

module.exports = (app) => {

  app.get('/users', user.getAll) 

}
