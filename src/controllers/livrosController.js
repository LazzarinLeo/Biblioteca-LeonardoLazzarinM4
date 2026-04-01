const livroService = require('../services/livrosServices');

const listarLivros = async (req, res, next) => {
    try{
       // return next(new Error("teste"))
        const livros = await livroService.buscarLivros();
        res.status(200).json({total: livros.length, livros});
    }catch(error){
        res.status(500).json({ error: "Erro interno ao buscar os livros"});
        //next(erro)
    }
}

const criarLivro = async (req, res) => {
    try{
        const {titulo, autor} = req.body;
        const novoLivro = await livroService.criarLivro({titulo, autor});

        res.status(201).json({
            mensagem: "Livro cadastrado",
            livro: novoLivro,
        })
    } catch(erro){
        res.status(400).json({erro: erro.message})
    }
}
module.exports = {listarLivros, criarLivro}