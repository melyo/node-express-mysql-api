module.exports = {

  connectionLimit: 100,

  host: process.env.DB_HOST || 'localhost',

  user: process.env.DB_USERNAME || 'root',

  password: process.env.DB_PASSWORD,

  port: process.env.DB_PORT || '3306',

  database: process.env.DB_DATABASE

}
