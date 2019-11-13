"use strict";
const User = use("App/Models/User");

class UserController {
  async createUser({ request, response }) {
    const data = request.raw();
    const competitor = JSON.parse(data);
    await User.create({
      username: competitor.username,
      email: competitor.email
    });
    return response.send({
      status: 200,
      msg: "Created user !"
    });
  }
}

module.exports = UserController;
