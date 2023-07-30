"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Address",
      [
        {
          AddressId: "bfeddaf0-a068-447a-9df5-b6252da20ba6",
          UserId: "bfeddaf0-a068-447a-9df5-b6252da20ba5",
          Address: "123 Main Street",
          Country: "Australia",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Address", null, {});
  },
};
