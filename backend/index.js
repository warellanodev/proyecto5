// Importaciones
const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const { dbConnection } = require('./config/database/mongodb');
require('dotenv').config();
const rolRoutes = require('./Routes/rolRoutes');
const usuarioRoutes = require('./Routes/usuarioRoutes');
const productoRoutes = require('./Routes/productoRoutes');
const pagoRoutes = require('./Routes/pagoRoutes');
const jwt = require('jsonwebtoken');

const app = express();

dbConnection();
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const usuario = req.body.usuario
    const token = jwt.sign(usuario, 'wsarivera@gmail.com', { expiresIn: '3m' })
    res.status(200).json({ token });
});

//Rutas
app.use('/api/roles', rolRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pagos', pagoRoutes);


app.listen(process.env.PORT || 3600, () => {
    console.log('Corriendo Servidor...');
});