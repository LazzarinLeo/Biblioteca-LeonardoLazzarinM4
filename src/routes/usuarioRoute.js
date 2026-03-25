const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.listarUsuariosId);
router.post('/', usuarioController.criarUsuario);

module.exports = router;