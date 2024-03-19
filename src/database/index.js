const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { DadosjogosModel } = require('../models/dadosjogos-model');
const { UserModel } = require('../models/user-model');

const database = new Sequelize(configDatabase);

DadosjogosModel.init(database);
UserModel.init(database);

module.exports = database;
