const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
    },
    rol: [
        { ref: 'role', type: Schema.Types.ObjectId, required: true }
    ],
    refresh_token: {
        type: Text,
    },

}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('usuario', usuarioSchema)