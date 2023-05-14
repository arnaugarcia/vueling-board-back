require("dotenv").config();
const mysql = require("mysql2");
const express = require('express');
global.connection = mysql.createConnection(process.env.DATABASE_URL);
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());

app.use(cors());

const triviaRoutes = require('./modules/trivia/trivia.route');
const playerRoutes = require('./modules/player/player.route');
const questionRoutes = require('./modules/questions/questions.route');
const gameRoutes = require('./modules/game/game.route');


app.use('/player', playerRoutes);
app.use('/questions', questionRoutes);
app.use('/game', gameRoutes);

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
