const pool = require('../database/connection')

const buscarLivros = async () => {
    try {
        const result = await pool.query('SELECT * FROM livros ORDER BY id')
        return result.rows
    } catch(error){
        console.log('erro', error)
        throw error
    }
};

const buscarLivrosPorID = async (id) => {
    const result = await pool.query('SELECT * FROM livros WHERE id = $1', [
        id
    ])
    return result.rows(0)
}

const criarLivro = async => ({titulo, autor}) =>{
     const novoLivro = {
        id: acervo.length + 1,
        titulo,
        autor
    };
    if (!livro.titulo || !livro.autor){
        throw new Error('Nome e Email são necessários');
    };
    acervo.push(novoLivro);
    return novoLivro;
};

module.exports = {buscarLivros, buscarLivrosPorID, criarLivro}