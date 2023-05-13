const express = require('express');
const router = require('./routes/QuestionRoute');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(router);

mongoose.connect('mongodb://localhost:27017/kahoot_offline', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.log('Error al conectar a MongoDB', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));