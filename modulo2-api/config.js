'use strict'

const debug = require('debug')('modulo2:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'modulo2',
    username: process.env.DB_USER || 'sensor2',
    password: process.env.DB_PASS || '123456',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || '123456'
  }
}
