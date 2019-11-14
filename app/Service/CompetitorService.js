"use strict";

class CompetitorService {
  static async calculateScore(countOfVote) {
    var sum = 0;
    for (let index = 0; index < countOfVote.length; index++) {
      sum = sum + countOfVote[index];
    }
    return sum;
  }
}

module.exports = CompetitorService;
