const { model, Schema } = require('mongoose');

const rolSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('role', rolSchema)