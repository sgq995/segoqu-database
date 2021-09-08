'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Content.associations['Post'] = Content.belongsTo(models['Post'], {
        foreignKey: 'post_id',
      });

      Content.associations['Component'] = Content.belongsTo(models['Component'], {
        foreignKey: 'component_tag',
      });

      Content.associations['ContentProp'] = Content.hasMany(models['ContentProp'], {
        foreignKey: 'content_id',
      });
    }
  };
  Content.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    postId: {
      field: 'post_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'posts',
        },
        key: 'id',
      },
    },
    componentTag: {
      field: 'component_tag',
      type: DataTypes.STRING(50),
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'content',
    tableName: 'contents',
    timestamps: false,
  });
  return Content;
};