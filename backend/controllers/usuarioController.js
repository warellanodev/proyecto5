const res = require('express/lib/response');
const { usuariosActivos, buscarPorEmail, nuevoUsuario, actualizarUsuario, eliminarUsuarioActivo } = require('../bussinesLogic/usuariosBL');
const { validationResult } = require('express-validator');
const { GenericResponse } = require('../utils/genericResponse');
const { CustomMessages } = require('../utils/messages');

const obtener = async(req, res) => {
    const response = new GenericResponse();
    try {
        response.data = await usuariosActivos();
        return res.json(response);
    } catch (error) {
        console.log(error)
        response.message = CustomMessages.error_500;
        response.success = false;
        return res.status(500).json(response);
    }
}

const guardar = async(req, res) => {
    const response = new GenericResponse();
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response.success = false;
            response.messages = errors.mapped();
            return res.status(400).json(response);
        }
        const { email } = req.body
        const buscar = await buscarPorEmail(email);

        if (buscar) {
            response.success = false;
            response.message = CustomMessages.error_email;
            return res.status(400).json(response);
        }

        response.data = await nuevoUsuario(req.body);
        response.message = CustomMessages.create_ok;
        return res.status(201).json(response);

    } catch (error) {
        console.log(error)
        response.message = CustomMessages.error_500;
        response.success = false;
        return res.status(500).json(response);
    }
}

module.exports = { obtener, guardar };