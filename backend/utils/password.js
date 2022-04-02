const bcrypt = require('bcrypt');

const encriptarPassword = (password) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
};

module.exports = { encriptarPassword };