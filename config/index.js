require('dotenv').config();

const databaseHostKey = process.env.DATABASE_DIALECT === 'sqlite'
  ? 'storage'
  : 'host';
const databaseHostValue = process.env.DATABASE_DIALECT === 'sqlite'
  ? process.env.DATABASE_STORAGE
  : process.env.DATABASE_HOST;

const config = {
  "database": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_DATABASE,
    "dialect": process.env.DATABASE_DIALECT,
    [databaseHostKey]: databaseHostValue,
    "port": process.env.DATABASE_PORT,
  }
}

config[process.env.NODE_ENV] = config['database'];

module.exports = config;
