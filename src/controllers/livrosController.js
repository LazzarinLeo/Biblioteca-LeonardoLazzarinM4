const livroService = require('../services/livrosServices');

const listarLivros = async (req, res) => {
    try{
    const livros = await livroService.buscarLivros();
    req.status(200).json({total: livros.length, livros});
    }catch(error){
        req.status(500).json({ error: "Erro interno ao buscar os livros"});
    }
}
module.exports = {listarLivros}