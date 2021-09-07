'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('components_props', {
      componentTag: {
        field: 'component_tag',
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: 'components',
          },
          key: 'tag',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      propName: {
        field: 'prop_name',
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: 'props',
          },
          key: 'name',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('components_props');
  }
};
