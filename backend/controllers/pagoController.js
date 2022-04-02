const mercadopago = require("mercadopago");
const { GenericResponse } = require('../utils/genericResponse');
const { CustomMessages } = require('../utils/messages');

// Agrega credenciales
mercadopago.configure({
    access_token: process.env.MERCADOPAGO,
});

const pago = async(req, res) => {
    const response = new GenericResponse();
    const { articulos } = req.body
    console.log(req.body)

    try {

        let preference = {
            items: [],
        };
        // Sacar de articulos cada producto y pasarlo a como lo requiere mercadopago
        articulos.forEach(prod => {
            const agregar = { title: prod.nombre, unit_price: prod.precio, quantity: prod.cantidad };

            preference.items.push(agregar);
        });

        //response.body.id
        const result = await mercadopago.preferences.create(preference);
        response.data = result.body.id
        return res.json(response);

    } catch (error) {
        console.log(error)
        response.message = CustomMessages.error_500;
        response.success = false;
        return res.status(500).json(response);
    }

};

module.exports = { pago };