"use strict";

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class AdminSeeder {
  static async run() {
    await Database.table("admins").insert({
      username: "helloworld",
      password: "passwordIsSecure"
    });
  }
}

module.exports = AdminSeeder;
