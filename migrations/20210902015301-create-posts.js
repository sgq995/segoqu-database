'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'categories',
          },
          key: 'id',
        },
        onDelete: 'set null',
      },
      title: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      summary: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};
