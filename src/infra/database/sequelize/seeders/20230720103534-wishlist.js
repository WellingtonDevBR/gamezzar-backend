"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Wishlist",
      [
        {
          WishlistId: "a0b2b3c4-5d6e-7f8g-9h5i-1j2k3l4m5n6o",
          UserId: "bfeddaf0-a068-447a-9df5-b6252da20ba5",
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          InterestLevel: "gauge1.svg",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wishlist", null, {});
  },
};
