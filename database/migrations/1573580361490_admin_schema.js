"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AdminSchema extends Schema {
  up() {
    this.create("admins", table => {
      table.increments();
      table.string("username", 80).notNullable();
      table.string("password", 80).notNullable();
    });
  }

  down() {
    this.drop("admins");
  }
}

module.exports = AdminSchema;
