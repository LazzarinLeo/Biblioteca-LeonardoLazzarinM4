const livroService = require('../services/livrosServices');

const listarLivros = async (req, res) => {
    try{
    const livros = await livroService.buscarLivros();
    res.status(200).json({total: livros.length, livros});
    }catch(error){
        res.status(500).json({ error: "Erro interno ao buscar os livros"});
    }
}
module.exports = {listarLivros}