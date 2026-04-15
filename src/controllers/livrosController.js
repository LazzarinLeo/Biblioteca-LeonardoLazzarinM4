const livroService = require('../services/livrosServices')

const listarLivros = async (req, res) => {
    try {
        const livros = await livroService.buscarLivros()
        
        res.status(200).json({
            total: livros.length,
            livros
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            erro: 'Erro interno ao buscar os livros'
        })
    }
}

const criarLivro = async (req, res) => {
    try {
        const { titulo, autor, isbn, ano_publicacao, categoria_id } = req.body

        const novoLivro = await livroService.criarLivro({
            titulo,
            autor,
            isbn,
            ano_publicacao,
            categoria_id
        })

        res.status(201).json({
            mensagem: 'Livro cadastrado',
            livro: novoLivro
        })
    } catch (error) {
        res.status(error.status || 400).json({
            erro: error.message
        })
    }
}

module.exports = {
    listarLivros,
    criarLivro
}