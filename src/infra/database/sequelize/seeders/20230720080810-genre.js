"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Genre",
      [
        {
          GenreId: "768a3294-2d57-41f6-8ce9-8c40e7a32562",
          Name: "Action",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "a52f06d7-8335-4e2a-912a-2efc9bc01c41",
          Name: "Adventure",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "84125f8f-1ed9-46d2-9840-6fe9ef3dc907",
          Name: "Role-playing",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "1d6a135f-6892-4961-a725-55e0a477f447",
          Name: "Strategy",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "5f4a3939-d33b-4da3-8d63-ae1a409d14a4",
          Name: "Simulation",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "6f37b13a-6014-4d9f-80fb-076b01f3ac18",
          Name: "Sports",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "520b6a0d-5f7a-47c1-9c8e-4b2c120e41ae",
          Name: "Racing",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "9127b8a0-10c6-4b4a-b953-5e7754d36618",
          Name: "Fighting",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "2b10f527-0a53-41f1-a635-30719bea6382",
          Name: "Shooter",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "bb19b3e6-598d-44f2-9912-46e0e7e04184",
          Name: "Platformer",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "daa75d10-522f-49c5-8b6f-3e2a2dbd71f0",
          Name: "Puzzle",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "94a5b683-7b9d-4d7d-9a77-c4dbfa2433f4",
          Name: "Stealth",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "23a94753-0bbf-4dc5-9e99-6bea7142cc84",
          Name: "Horror",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "d8678368-0f4d-4df9-9379-2706176c1af9",
          Name: "Survival",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "6d951189-88f4-4cd9-bc29-8358c0ebc93f",
          Name: "Open World",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "7819f2e6-bf2e-4593-9e57-30fb3b2d8cc3",
          Name: "RPG",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "8b1e9a62-4fe2-49ff-8b1a-1f19a3e22581",
          Name: "MMORPG",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "e461234f-8a5d-4d6d-bc0e-216ef5185a9a",
          Name: "Indie",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
        {
          GenreId: "888a333a-7b8c-4a1b-8a55-498f697e6db2",
          Name: "Tactical",
          Status: true,
          UpdatedAt: new Date(),
          CreatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genre", null, {});
  },
};
