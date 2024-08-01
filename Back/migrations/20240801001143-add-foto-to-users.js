'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'foto', {
      type: Sequelize.STRING(500),
      allowNull: false,
      defaultValue: '' // Set a default value to avoid NOT NULL constraint issues
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'foto');
  }
};
