'use strict'

/*
|--------------------------------------------------------------------------
| LeadSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class LeadSeeder {
  async run() {
    await Factory.model('App/Models/Lead').createMany(30)
  }
}

module.exports = LeadSeeder
