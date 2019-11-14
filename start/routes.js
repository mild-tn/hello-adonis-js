"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");
Route.post("/loginusername", "UserController.createUser");
Route.get("/competitor", "CompetitorController.getCompetitors");
Route.post("/vote", "UserController.voteCompetitors");
Route.post("/admin/login", "UserController.adminLogin");
Route.get("/admin/competitor", "CompetitorController.getCompetitorByAdmin");
Route.get("/admin/websiteScore", "CompetitorController.getScore");
