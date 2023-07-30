"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Edition",
      [
        {
          EditionId: "3c7b8da6-7d68-4a7d-96b5-855dc2d1ef01",
          Name: "Normal",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          EditionId: "a69a4e5e-cf6b-4e9d-a58c-5e46a55e1292",
          Name: "Greatest Hits",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          EditionId: "aa42ad2f-bc7f-47ef-9391-42a3e67e9eef",
          Name: "Platinum",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          EditionId: "23402b4b-5e99-408b-af6b-7e3b4116ad17",
          Name: "Game Of The Year",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          EditionId: "01e417c3-8c95-4e63-9e36-615a4c3d2384",
          Name: "Ultimate",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          EditionId: "3158e712-69a4-4f29-b0b4-3bc5e82c5823",
          Name: "Collector's Edition",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          EditionId: "b0b4e0a9-4b0a-4b9a-8b0a-4b0a4b0a4b0a",
          Name: "Other Special Edition",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Edition", null, {});
  },
};
