const { Router } = require('express');
const router = Router();
const { obtener, guardar } = require('../controllers/rolController');
const validator = require('../validators/usuarioValidator');

router.get('/', obtener);
router.post('/', validator.createUsuarioValidator, guardar);

module.exports = router;