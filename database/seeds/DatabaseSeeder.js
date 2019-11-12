"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const CompetitorSeeder = require("./CompetitorSeeder");

class DatabaseSeeder {
  async run() {
    await CompetitorSeeder.run();
  }
}

module.exports = DatabaseSeeder;
