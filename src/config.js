const { config } = require('dotenv')
config()

// module.exports = {
//   PORT: process.env.PORT || 4001,
//   db: {
//     user: process.env.DB_USER || 'postgres',
//     password: process.env.DB_PASSWORD || '2020',
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || '5432',
//     database: process.env.DB_DATABASE || 'cart',
//   },
// }

module.exports = {
  PORT: process.env.PORT || 4000,
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
}
