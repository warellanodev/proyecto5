const { obtenerUsuarios, buscarUsuarioPorCorreo, guardarUsuario, actualizarUsuario, eliminarUsuario } = require('../repositorys/usuariosRepository');
const { encriptarPassword } = require('../utils/password');

const usuariosActivos = async() => {
    return await obtenerUsuarios();
};

const buscarPorEmail = async(email) => {
    return await buscarUsuarioPorCorreo(email)
};

const nuevoUsuario = async(usuario) => {
    usuario.password = encriptarPassword(usuario.password);
    return await guardarUsuario(usuario);
};

const actualizarUsuario = async(usuario) => {
    const { password, telefono, rol, _id } = usuario;
    return await actualizarUsuario(_id, password, telefono, rol);
};

const eliminarUsuarioActivo = async(id) => {
    return await eliminarUsuario(id);
}

module.exports = { usuariosActivos, buscarPorEmail, nuevoUsuario, actualizarUsuario, eliminarUsuarioActivo };