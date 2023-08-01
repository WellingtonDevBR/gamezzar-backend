"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Platform",
      [
        {
          Name: "PlayStation 4",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "PlayStation 5",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Xbox One",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Xbox Series X",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Nintendo Switch",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "PC",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Xbox 360",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Wii U",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Wii",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Playstation 3",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Ps Vita",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          Name: "Nintendo 3DS",
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
      ],
      {},
      {
        autoincrement: true,
        needIdentityInsertWrapper: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Platform", null, {});
  },
};
