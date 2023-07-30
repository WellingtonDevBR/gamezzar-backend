"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Category",
      [
        {
          CategoryId: "1d6a135f-6892-4961-a725-55e0a477f447",
          Name: "Action",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "5f4a3939-d33b-4da3-8d63-ae1a409d14a4",
          Name: "Adventure",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "84125f8f-1ed9-46d2-9840-6fe9ef3dc907",
          Name: "Role-playing",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "1d6a135f-6892-4961-a725-55e0a477f448",
          Name: "Strategy",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "5f4a3939-d33b-4da3-8d63-ae1a409d14a5",
          Name: "Simulation",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "6f37b13a-6014-4d9f-80fb-076b01f3ac18",
          Name: "Sports",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "520b6a0d-5f7a-47c1-9c8e-4b2c120e41ae",
          Name: "Racing",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "9127b8a0-10c6-4b4a-b953-5e7754d36618",
          Name: "Fighting",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "2b10f527-0a53-41f1-a635-30719bea6382",
          Name: "Shooter",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "bb19b3e6-598d-44f2-9912-46e0e7e04184",
          Name: "Platformer",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "daa75d10-522f-49c5-8b6f-3e2a2dbd71f0",
          Name: "Puzzle",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "23a94753-0bbf-4dc5-9e99-6bea7142cc84",
          Name: "Horror",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "d8678368-0f4d-4df9-9379-2706176c1af9",
          Name: "Survival",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "6d951189-88f4-4cd9-bc29-8358c0ebc93f",
          Name: "Open World",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "7819f2e6-bf2e-4593-9e57-30fb3b2d8cc3",
          Name: "RPG",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "8b1e9a62-4fe2-49ff-8b1a-1f19a3e22581",
          Name: "MMORPG",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "e461234f-8a5d-4d6d-bc0e-216ef5185a9a",
          Name: "Indie",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "888a333a-7b8c-4a1b-8a55-498f697e6db2",
          Name: "Strategy",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "e461234f-8a5d-4d6d-bc0e-216ef5185a9b",
          Name: "Tactical",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "e461234f-8a5d-4d6d-bc0e-216ef5185a9c",
          Name: "Casual",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "e461234f-8a5d-4d6d-bc0e-216ef5185a9d",
          Name: "Family",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "e461234f-8a5d-4d6d-bc0e-216ef5185a9e",
          Name: "Educational",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "e461234f-8a5d-4d6d-bc0e-216ef5185a9f",
          Name: "Music",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          CategoryId: "e461234f-8a5d-4d6d-bc0e-216ef5185a90",
          Name: "Party",
          Status: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Category", null, {});
  },
};
