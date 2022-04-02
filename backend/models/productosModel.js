const { model, Schema } = require('mongoose');

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    },
    precio: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String,
        default: "https://www.mercamex.de/assets/img/products/default.jpg",
    },
    stock: {
        type: Number,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('producto', productoSchema)