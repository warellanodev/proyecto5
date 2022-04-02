const RolesModel = require('../models/rolesModel');

// Obtener Roles
const obtenerRoles = async() => {
    return await RolesModel.find();
};

/**
 * Guardar Rol
 * @param {object} objRol 
 * @returns Un nuevo rol
 */
const guardarRol = async(objRol) => {
    const nuevoRol = new RolesModel(objRol);
    // const resultado = await nuevoRol.save();
    // return resultado;
    return await nuevoRol.save();
};

module.exports = { obtenerRoles, guardarRol };