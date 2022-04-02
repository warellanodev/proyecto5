const { Router } = require('express');
const router = Router();
const { pago } = require('../controllers/pagoController');
const validator = require('../validators/rolValidator');

router.post('/', validator.createRolValidator, pago);

module.exports = router;