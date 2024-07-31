'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Step 1: Add the column without NOT NULL constraint
    await queryInterface.addColumn('Users', 'foto', {
      type: Sequelize.STRING(500),
      allowNull: true,
    });

    // Step 2: Update existing rows with a default value
    await queryInterface.sequelize.query('UPDATE `Users` SET `foto` = ""');

    // Step 3: Alter the column to be NOT NULL
    await queryInterface.changeColumn('Users', 'foto', {
      type: Sequelize.STRING(500),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the changes
    await queryInterface.removeColumn('Users', 'foto');
  }
};
