const Sequelize = require('sequelize');
const db = require('./database')


const Post = db.define('posts', {
    title:{
        type: Sequelize.STRING,
        allowNUll: false
    },
    content: {
        type: Sequelize.TEXT,
    },
    image:{
        type:Sequelize.STRING,
        defaultValue: '/pics/header.jpg'
    },
    date: {
        type: Sequelize.DATEONLY,
        defaultValue: new Date()
    }
});

module.exports = Post;