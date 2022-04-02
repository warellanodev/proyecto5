const { obtenerProductos, nuevoProducto } = require('../repositorys/productosRepository');

const productosActivos = async() => {
    return await obtenerProductos();
};

const agregarProducto = async(model) => {
    return await nuevoProducto(model);
};


module.exports = { productosActivos, agregarProducto };