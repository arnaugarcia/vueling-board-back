const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar a MongoDB', err));

app.use(express.json());

const questionRoutes = require('./modules/QuestionRoute');
const gamesRoutes = require('./modules/game/GameRoute');

app.use('/games', gamesRoutes);
app.use('/games/:id', questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));