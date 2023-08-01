"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameRegion",
      [
        {
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          RegionId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "286e79c1-b60c-4d5c-ba4c-9a60f89e6252",
          RegionId: 2,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "2bb6349c-c9a0-47ef-9c6d-1d8e5b274ae5",
          RegionId: 3,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "57c76e23-3a06-41c5-b8ad-48f0fb1e8de7",
          RegionId: 4,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "a730d241-8453-43d1-8f0f-8533a10317e0",
          RegionId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "9bc1e70a-2c3e-4963-9b97-0c6bfa92b014",
          RegionId: 2,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "b16d4877-605a-4c34-8911-94f7a8f47462",
          RegionId: 3,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "1a4da6f9-2db2-4022-906a-cfc3fe18b5d9",
          RegionId: 4,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "3b8a952c-fc7c-41a4-8d4d-9faff0847278",
          RegionId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "e8ff3d07-6743-4b10-af94-25109f5a0a2e",
          RegionId: 2,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameRegion", null, {});
  },
};
