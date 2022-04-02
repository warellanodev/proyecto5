const { Router } = require('express');
const router = Router();
const { obtener, guardar } = require('../controllers/productoController');
const validator = require('../validators/productoValidator');

router.get('/', obtener);
router.post('/', validator.createProductoValidator, guardar);

module.exports = router;