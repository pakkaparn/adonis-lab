'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeadsSchema extends Schema {
  up() {
    this.create('leads', (table) => {
      table.increments()
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.string('email').notNullable()
      table.string('contact_number').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('leads')
  }
}

module.exports = LeadsSchema
