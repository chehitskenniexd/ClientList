'use strict'

const Client = require('./clientModel');
const Preparer = require('./clientModel');

// ------------ Database Associations ------------ //

// Channel => Follows Association
Preparer.hasMany(Client);
Client.belongsTo(Preparer);

module.exports = {
    Client,
    Preparer
}