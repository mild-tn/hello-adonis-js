"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompetitorSchema extends Schema {
  up() {
    this.create("competitors", table => {
      table.increments("idCompetitor");
      table.string("name");
      table.string("nickname");
      table.string("university");
      table.string("like");
      table.string("share");
      table.integer("total");
      table.timestamps();
    });
  }

  down() {
    this.drop("competitors");
  }
}

module.exports = CompetitorSchema;
