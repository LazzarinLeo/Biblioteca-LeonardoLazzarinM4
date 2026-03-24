const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/', usuarioController.listarUsuarios);

router.get('/', usuarioController.listarUsuariosId);

router.get('/', usuarioController.criarUsuario);

module.exports = router;