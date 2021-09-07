'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

const Category = require('./category')(sequelize, Sequelize.DataTypes);
db['Category'] = Category;

const Component = require('./component')(sequelize, Sequelize.DataTypes);
db['Component'] = Component;

const Content = require('./content')(sequelize, Sequelize.DataTypes);
db['Content'] = Content;

const ContentProp = require('./contentprop')(sequelize, Sequelize.DataTypes);
db['ContentProp'] = ContentProp;

const Post = require('./post')(sequelize, Sequelize.DataTypes);
db['Post'] = Post;

const Prop = require('./prop')(sequelize, Sequelize.DataTypes);
db['Prop'] = Prop;

const Tag = require('./tag')(sequelize, Sequelize.DataTypes);
db['Tag'] = Tag;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
