"use strict";
const User = use("App/Models/User");
const Database = use("Database");
const Encryption = use("Encryption");
const Hash = use("Hash");

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

  async adminLogin({ request, response, auth }) {
    console.log(auth);
    const data = JSON.parse(request.raw());
    const findUser = await Database.from("admins").where({
      username: data.username
    });
    try {
      const decryption = Encryption.decrypt(findUser[0].password);
      if (
        findUser[0].username === data.username &&
        decryption === data.password
      ) {
        const token = await auth.generate(findUser[0]);
        return response.send({
          status: 200,
          msg: "Username correct !!",
          token: token
        });
      }
    } catch (error) {
      return response.send({
        status: 401,
        msg: "Username or Password incorrect !!"
      });
    }
  }
}

module.exports = UserController;
