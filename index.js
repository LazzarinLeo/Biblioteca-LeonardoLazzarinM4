const express = require('express');
const livrosRoutes = require('./src/routes/livrosRoute');
const usuarioRoutes = require('./src/routes/usuarioRoute');

const app = express();

app.use(express.json());
app.use('/livros', livrosRoutes);
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.json({
        sistema: 'Biblioteca M4',
        status: 'Online'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Endereço: http://localhost:${PORT}`);
});