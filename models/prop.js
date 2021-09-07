'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prop.belongsToMany(models['Component'], {
        through: 'components_props',
        foreignKey: 'prop_name',
        otherKey: 'component_tag',
        timestamps: false,
      });

      Prop.hasMany(models['ContentProp'], {
        foreignKey: 'prop_name',
      });
    }
  };
  Prop.init({
    name: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Prop',
    tableName: 'props',
    timestamps: false,
  });
  return Prop;
};