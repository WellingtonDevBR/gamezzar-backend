"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserGame",
      [
        {
          UserId: "bfeddaf0-a068-447a-9df5-b6252da20ba5",
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          PlatformId: "a4a9a6af-7365-49f3-8696-9e86a6a99f01",
          RegionId: "1a94039f-9986-4ebd-943e-18e684672366",
          EditionId: "3c7b8da6-7d68-4a7d-96b5-855dc2d1ef01",
          Disposition: 4,
          Satisfaction: 1,
          DiscCondition: 2,
          CoverCondition: 3,
          ManualCondition: 4,
          Description: "This is a description",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserGame", null, {});
  },
};
