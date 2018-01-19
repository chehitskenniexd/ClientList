'use strict'

const Sequelize = require('sequelize');
const db = require('db');

const Client = db.define('client', {
    date: Sequelize.DATE,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    socialDigitsPayer: Sequelize.INTEGER,
    socialDigitsSpouse: Sequelize.INTEGER,
    eicChildren: Sequelize.BOOLEAN,
    missingDocs: Sequelize.BOOLEAN,
    // preparer will be a table with preparers (users)
    preparer: Sequelize.INTEGER,
    phoneNumber: Sequelize.STRING,
    fee: Sequelize.INTEGER,
    // may want to refactor this to a join table
    comments: Sequelize.STRING 
}) //end db.define

module.exports = Client;