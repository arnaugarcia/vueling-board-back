const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar a MongoDB', err));

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
