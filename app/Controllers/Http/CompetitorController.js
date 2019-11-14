"use strict";
const Competitor = use("App/Models/Competitor");
const Database = use("Database");
const Encryption = use("Encryption");
const CompetitorService = require("../../Service/CompetitorService");

class CompetitorController {
  async getCompetitors({ request, response }) {
    const competitors = await Database.select(
      "name",
      "nickname",
      "university"
    ).from("competitors");
    return response.send({
      status: 200,
      competitors: competitors
    });
  }
  async getCompetitorByAdmin({ request, response }) {
    const competitors = await Database.table("competitors");
    return response.send({
      status: 200,
      competitors: competitors
    });
  }

  async getScore() {
    const countOfVote = await Database.table("competitors")
      .innerJoin("users", "competitors.idCompetitor", "users.idCompetitor")
      .pluck("countOfVote");
    if (countOfVote.length != 0) {
      const calculateScore = await CompetitorService.calculateScore(
        countOfVote
      );

      return calculateScore;
    }
  }
}

module.exports = CompetitorController;
