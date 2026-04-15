const pool = require('../database/connection')


const buscarLivros = async () => {
  try {
    const result = await pool.query(`
      SELECT 
        livros.id,
        livros.titulo,
        livros.autor,
        categorias.nome AS categoria
      FROM livros
      LEFT JOIN categorias
        ON livros.categoria_id = categorias.id
      ORDER BY livros.id
    `)
        return result.rows
    } catch (error) {
        console.error('Erro ao buscar livros:', error)
        throw error
    }
}

const buscarLivrosPorID = async (id) => {
    const result = await pool.query(
        'SELECT * FROM livros WHERE id = $1',
        [id]
    )
    return result.rows[0]
}

const criarLivro = async ({ titulo, autor, isbn, ano_publicacao, categoria_id }) => {
    try {
        const query = `
            INSERT INTO livros
            (titulo, autor, isbn, ano_publicacao, categoria_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `

        const resultado = await pool.query(query, [
            titulo,
            autor,
            isbn,
            ano_publicacao,
            categoria_id
        ])

        return resultado.rows[0]
    } catch (error) {
        if (error.code === '23505') {
            const err = new Error('ISBN já cadastrado')
            err.status = 400
            throw err
        }

        throw error
    }
}

module.exports = {
    buscarLivros,
    buscarLivrosPorID,
    criarLivro
}