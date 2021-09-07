'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contents', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      postId: {
        field: 'post_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'posts',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      componentTag: {
        field: 'component_tag',
        type: Sequelize.STRING(50),
        allowNull: true,
        references: {
          model: {
            tableName: 'components',
          },
          key: 'tag',
        },
        onUpdate: 'cascade',
        onDelete: 'set null',
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contents');
  }
};
