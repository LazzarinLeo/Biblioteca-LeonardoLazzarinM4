const express = require('express');
const router = express.Router()
const livrosRoutes = require('./src/routes/livrosRoute')
const usuariosRoutes = require('./src/routes/usuarioRoute')
const { status } = require('express/lib/response')

router.use('/livros', livrosRoutes)
router.use('/usuarios', usuariosRoutes)

router.get('/', (req, res) => {
       res.status(200).json({erro:'Bem-vindo!'})
});

router.use((req, res) => {
      res.status(404).json({erro:'Rota não encontrada'})
});


module.exports = router;