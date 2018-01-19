'use strict'

const Channels = require('./channelModel');
const Follows = require('./followsModel');
const Videos = require('./videosModel');
const Client = require('./clientModel');
const Preparer = require('./clientModel');

// ------------ Database Associations ------------ //

// Channel => Follows Association
Preparer.hasMany(Client);
Client.belongsTo(Preparer);
Channels.hasMany(Follows);
Follows.belongsTo(Channels);

Channels.hasMany(Videos);
Videos.belongsTo(Channels);

module.exports = {
    Channels,
    Follows,
    Client,
    Preparer
}