'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentProp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContentProp.associations['Content'] = ContentProp.belongsTo(models['Content'], {
        foreignKey: 'content_id',
      });

      ContentProp.associations['Prop'] = ContentProp.belongsTo(models['Prop'], {
        foreignKey: 'prop_name',
      })
    }
  };
  ContentProp.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    contentId: {
      field: 'content_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: {
          tableName: 'contents',
        },
        key: 'id',
      },
    },
    propName: {
      field: 'prop_name',
      type: DataTypes.STRING(50),
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'contentProp',
    tableName: 'contents_props',
    timestamps: false,
  });
  return ContentProp;
};