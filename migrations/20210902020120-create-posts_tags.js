'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_tags', {
      postId: {
        field: 'post_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: 'posts',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      tagId: {
        field: 'tag_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: 'tags',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_tags');
  }
};
