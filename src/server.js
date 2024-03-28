require('./database');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { routes } = require('./routes');
const { port } = require('./database/config');

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

const Porta = 8080;

server.listen({port: process.env.PORT ?? Porta}, () => {
    console.log(`API iniciada: http://localhost:${Porta}`);
});
