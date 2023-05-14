require("dotenv").config();
const mysql = require("mysql2");
const express = require('express');
global.connection = mysql.createConnection(process.env.DATABASE_URL);
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4500 });

wss.on('connection', function connection(ws) {
    console.log('New client connected');
    ws.onmessage = (message) => {
        updateClients(message.data);
    };
});

const updateClients = (message) => {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
};

app.use(express.json());

app.use(cors());

const playerRoutes = require('./modules/player/player.route');
const questionRoutes = require('./modules/questions/questions.route');
const gameRoutes = require('./modules/game/game.route');

app.use('/players', playerRoutes);
app.use('/questions', questionRoutes);
app.use('/games', gameRoutes);

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
