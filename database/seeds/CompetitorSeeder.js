"use strict";

/*
|--------------------------------------------------------------------------
| CompetitorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class CompetitorSeeder {
  static async run() {
    await Database.table("competitors").insert([
      {
        name: "นายพิรุฬห์ลักษณ์ มโนรัตน์",
        nickname: "พีรณัฐ",
        university: "พระนครเหนือ",
        like: "0",
        share: "0"
      },
      {
        name: "นางสาวชนิตา ศิลานฤธานนท์",
        nickname: "พีช",
        university: "พระนครเหนือ",
        like: "0",
        share: "0"
      },
      {
        name: "นายจักราช นิลละออ ",
        nickname: "เจมส์",
        university: "บางมด",
        like: "0",
        share: "0"
      },
      {
        name: "นางสาวเกวลิน อินทรกำแหง",
        nickname: "เกรซ",
        university: "บางมด",
        like: "0",
        share: "0"
      },
      {
        name: "นายสิรภพ รักเกื้อ",
        nickname: "เจ",
        university: "ลาดกระบัง",
        like: "0",
        share: "0"
      },
      {
        name: "นางสาวเบญจพร เงินศรีตระกูล",
        nickname: "เม",
        university: "ลาดกระบัง",
        like: "0",
        share: "0"
      }
    ]);
  }
}

module.exports = CompetitorSeeder;
