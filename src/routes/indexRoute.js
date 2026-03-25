const express = require('express');
const router = express.Router()
const livrosRoutes = require('./livrosRoute')
const usuariosRoutes = require('./usuarioRoute')
const {logger} = require('../middlewares/mainMiddleware')

router.use('/livros', livrosRoutes)
router.use('/usuarios', usuariosRoutes)
router.use(logger);

router.get('/', (req, res) => {
       res.json({
            sistema: 'Biblioteca M4',
            status: 'Online',
            saudacao: 'Seja Bem-Vindo'
       })
});

router.use((req, res) => {
      res.status(404).json({erro:'Rota não encontrada'})
});


module.exports = router;