"use strict";
const Competitor = use("App/Models/Competitor");
const Database = use("Database");

class CompetitorController {
  async getCompetitors({ request, response }) {
    const competitors = await Database.table("competitors");
    return response.send({
      status: 200,
      competitors: competitors
    });
  }
}

module.exports = CompetitorController;
