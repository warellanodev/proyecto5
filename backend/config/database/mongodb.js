const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Conectado a la DB')
    } catch (error) {
        console.log('Hubo un error en la conexion');
        console.log(error);
    }

};

module.exports = { dbConnection };