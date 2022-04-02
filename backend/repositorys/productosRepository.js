const ProductosModel = require('../models/productosModel');

// Obtener Productos
const obtenerProductos = async() => {
    return await ProductosModel.find();
};

/**
 * Nuevo Producto
 * @param {object} model
 * @returns Un nuevo prodcuto
 */
const nuevoProducto = async(model) => {
    const nuevo = new ProductosModel(model);
    return await nuevo.save();
};

module.exports = { obtenerProductos, nuevoProducto };