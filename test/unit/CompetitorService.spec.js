"use strict";

const { test } = use("Test/Suite")("CompetitorService");
const CompetitorCalculateScore = require("../../app/Service/CompetitorService");

test("should be return 6 when give [2,3,1]", async ({ assert }) => {
  const countOfVote = [2, 3, 1];
  const competitor = await CompetitorCalculateScore.calculateScore(countOfVote);
  assert.equal(competitor, 6);
});
