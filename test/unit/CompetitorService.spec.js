"use strict";

var assert = require("assert");
var expect = require("chai").expect;
var CompetitorService = require("../../app/Service/CompetitorService");

describe("CompetitorService", () => {
    describe("calculateScore()", async() => {
        it("data of score it should be number", async() => {
            const countOfVote = [2, 3, 1];
            const score = await CompetitorService.calculateScore(countOfVote);
            // expect(typeof score).to.be.an(number);
            expect(score).to.be.an('number');
        });
        it('should be return "0" when give []', async() => {
            const emptyVote = [];
            const score = await CompetitorService.calculateScore(emptyVote);
            expect(score).to.be.equal(0);
        });
        it("should be return 6 when give [2,3,1]", async() => {
            const countOfVote = [2, 3, 1];
            const score = await CompetitorService.calculateScore(countOfVote);
            assert.equal(score, 6);
        });
    });
});