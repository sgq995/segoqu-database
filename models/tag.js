'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tag.associations['Post'] = Tag.belongsToMany(models['Post'], {
        through: 'posts_tags',
        foreignKey: 'tag_id',
        otherKey: 'post_id',
        timestamps: false,
      });
    }
  };
  Tag.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    label: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'tag',
    tableName: 'tags',
    timestamps: false,
  });
  return Tag;
};