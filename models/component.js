'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Component extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Component.associations['Prop'] = Component.belongsToMany(models['Prop'], {
        through: 'components_props',
        foreignKey: 'component_tag',
        otherKey: 'prop_name',
        timestamps: false,
      })
    }
  };
  Component.init({
    tag: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'component',
    tableName: 'components',
    timestamps: false,
  });
  return Component;
};