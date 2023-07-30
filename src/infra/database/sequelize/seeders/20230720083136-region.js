"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Region",
      [
        {
          RegionId: "1a94039f-9986-4ebd-943e-18e684672366",
          Name: "Oceania",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          RegionId: "19db8a17-23f7-41d0-91f7-9f4c8f38d5a5",
          Name: "America",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          RegionId: "35b3f2ff-d51e-4b6e-a25c-b88ff4c405c2",
          Name: "Europe",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          RegionId: "d52b30df-b5df-4348-a4c1-c7a3b78415f7",
          Name: "Asia",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Region", null, {});
  },
};
