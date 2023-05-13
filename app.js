const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();

const mysql = require("mysql2");
global.connection = mysql.createConnection(process.env.DATABASE_URL);

app.use(express.json());
app.use(cors());

const triviaRoutes = require('./modules/trivia/trivia.route');
const playerRoutes = require('./modules/player/player.route');
const questionRoutes = require('./modules/questions/questions.route');

app.use('/games/trivia', triviaRoutes);
app.use('/player', playerRoutes);
app.use('/questions', questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
