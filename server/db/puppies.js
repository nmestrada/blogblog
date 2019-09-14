const Sequelize = require('sequelize');
const db = require('./database')

//insert puppy models here
const Puppy = db.define('puppies', {
    name:{
        type: Sequelize.STRING,
        allowNUll: false
    },
    bday: {
        type: Sequelize.DATEONLY,
        defaultValue: new Date()
    }
});

module.exports = Puppy;