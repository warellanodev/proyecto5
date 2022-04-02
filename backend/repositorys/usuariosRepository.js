const UsuariosModel = require('../models/usuariosModel');

// Obtener Usuarios
const obtenerUsuarios = async() => {
    return await UsuariosModel.find();
};

const buscarUsuarioPorCorreo = async(email) => {
    return await UsuariosModel.findOne({ email })
}


/**
 * Guardar Usuario
 * @param {object} objUsuario 
 * @returns Un nuevo usuario
 */
const guardarUsuario = async(objUsuario) => {
    const nuevoUsuario = new UsuariosModel(objUsuario);
    return await nuevoUsuario.save();
};

// Actualizar Usuario
const actualizarUsuario = async(id, password, telefono, rol) => {
    return await UsuariosModel.updateOne({ _id: id }, { password, telefono, rol });
}

//Eliminar Usuario
const eliminarUsuario = async() => {
    return await UsuariosModel.deleteOne({ _id: id });
}

module.exports = { obtenerUsuarios, buscarUsuarioPorCorreo, guardarUsuario, actualizarUsuario, eliminarUsuario };