const { obtenerRoles, guardarRol } = require('../repositorys/rolesRepository');

const rolesActivos = async() => {
    return await obtenerRoles();
};

const nuevoRol = async(nombreRol) => {
    const agregarRol = {
        nombre: nombreRol
    }
    return await guardarRol(agregarRol);
}
module.exports = { rolesActivos, nuevoRol };