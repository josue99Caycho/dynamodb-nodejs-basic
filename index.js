
// Configuracion de variables de entorno
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const taskRoute = require('./src/routes/task');

app.use('/api/task', taskRoute);

app.listen(port, () => console.log(`Servidor levantado en el puerto : ${port}`))