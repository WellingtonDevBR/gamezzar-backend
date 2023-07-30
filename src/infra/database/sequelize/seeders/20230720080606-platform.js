"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Platform",
      [
        {
          PlatformId: "a4a9a6af-7365-49f3-8696-9e86a6a99f01",
          Name: "PlayStation 4",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "c6cb2a2c-241e-42c1-8c9d-8dc6c51e2324",
          Name: "PlayStation 5",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "c37bbf2b-8f9b-4da6-8a36-4b9f717de5b5",
          Name: "Xbox One",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "f2f2da16-2c5d-4914-99d9-51c21a8f7632",
          Name: "Xbox Series X",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "0e7086d0-70c2-4f4a-9d1e-5ef66cb2c183",
          Name: "Nintendo Switch",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "d60f9a44-1655-4b1a-815d-4e6f1e4f8d8e",
          Name: "PC",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "d60f9a44-1655-4b1a-815d-4e6f1e4f8d8f",
          Name: "Xbox 360",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "d60f9a44-1655-4b1a-815d-4e6f1e4f8d91",
          Name: "Wii U",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "d60f9a44-1655-5b1a-815d-4e6f1e4f8d22",
          Name: "Wii",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "d60f9a44-1655-5b1a-358d-4e6f1e4f8d22",
          Name: "Playstation 3",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "d61f9a44-1655-5b1a-358d-4e6f1e4f8d22",
          Name: "Ps Vita",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          PlatformId: "d60f9a85-1655-5b1a-358d-4e6f1e4f8d22",
          Name: "Nintendo 3DS",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Platform", null, {});
  },
};
