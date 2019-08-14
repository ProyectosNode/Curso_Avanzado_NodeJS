'use strict'

const debug = require('debug')('modulo2:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const minimist = require('minimist')
//const argv = require('yargs').boolean('y').argv
const db = require('./')

const args = minimist(process.argv)
const prompt = inquirer.createPromptModule()

async function setup () {
  if (!args.yes) {
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'Seguro que quieres borrar la base de datos: modulo2?'
      }
    ])

    if (!answer.setup) {
      return console.log('Aqui no ha pasado nada :)')
    }
  }

/* async function setup () {
  const ops = argv.y
  if (!ops) {
    const answer = await prompt({
      type: 'confirm',
      name: 'setup',
      message: 'Seguro que quieres borrar la base de datos: modulo2?'
    })
    if (!answer.setup || ops) {
      return console.log('Aqui no ha pasado nada :)')
    }
  }   */

  const config = {
    database: process.env.DB_NAME || 'modulo2',
    username: process.env.DB_USER || 'sensor2',
    password: process.env.DB_PASS || '123456',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
