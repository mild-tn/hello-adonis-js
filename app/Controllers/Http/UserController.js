"use strict";
const User = use("App/Models/User");
const Database = use("Database");

class UserController {
  async createUser({ request, response }) {
    const data = request.raw();
    const competitor = JSON.parse(data);
    await User.create({
      username: competitor.username
    });
    return response.send({
      status: 200,
      msg: "Created user !",
      username: competitor.username
    });
  }

  async voteCompetitors({ request, response }) {
    const data = request.raw();
    const competitor = JSON.parse(data);
    const competitors = await Database.table("users")
      .where("idCompetitor", "countOfVote")
      .update({
        idCompetitor: competitor.id,
        countOfVote: competitor.count
      });
    return response.send({
      status: 200,
      msg: "updated !!"
    });
  }
}

module.exports = UserController;
