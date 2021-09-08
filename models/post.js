const { DataTypes, Sequelize, Model } = require("sequelize");

/**
 * 
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes 
 */
function PostHelper(sequelize, DataTypes) {
  class Post extends Model {
    /**
     * 
     * @param {Object.<string, Model>} models 
     */
    static associate(models) {
      Post.associations['Category'] = Post.belongsTo(models['Category'], {
        foreignKey: 'category_id',
      });

      Post.associations['Tag'] = Post.belongsToMany(models['Tag'], {
        through: 'posts_tags',
        foreignKey: 'post_id',
        otherKey: 'tag_id',
        timestamps: false,
      });

      Post.associations['Content'] = Post.hasMany(models['Content'], {
        foreignKey: 'post_id',
      });
    }
  }

  Post.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    categoryId: {
      field: 'category_id',
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING(80),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    summary: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'post',
    tableName: 'posts',
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
  });

  return Post;
}

module.exports = PostHelper;
