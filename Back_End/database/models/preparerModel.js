'use strict'

const Sequelize = require('sequelize');
const db = require('../DBIndex');

const Preparer = db.define('preparer', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
})

module.exports = User;