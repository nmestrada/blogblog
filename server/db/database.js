const Sequelize = require('sequelize')

const dbName = "boilerplate";

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
  operatorsAliases: false,
})

//if you want to read a URL DB
/*
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432:yourdbname', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});
*/

module.exports = db
