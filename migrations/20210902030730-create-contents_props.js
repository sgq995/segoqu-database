'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contents_props', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      contentId: {
        field: 'content_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'contents',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      propName: {
        field: 'prop_name',
        type: Sequelize.STRING(50),
        allowNull: true,
        references: {
          model: {
            tableName: 'props',
          },
          key: 'name',
        },
        onUpdate: 'cascade',
        onDelete: 'set null',
      },
      value: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contents_props');
  }
};
