const usuarioService = require('../services/usuarioService');

const listarUsuarios = async (req, res) => {
    try{
    const usuarios = await usuarioService.buscarUsers();
    res.status(200).json({total: usuarios.length, usuarios});
    }catch(error){
        res.status(500).json({ error: "Erro interno ao buscar os usuarios"});
    }
}

const listarUsuariosId = async (req, res) => {
    try{
        const{id} = req.params;
       const usuarios = await usuarioService.buscarUsersPorId(id);
        if(!usuarios){
            return res.status(404).json({ error: `Usuário ${id} não encontrado`})
        }
    res.status(200).json({total: usuarios.length, usuarios});
    }catch(error){
        res.status(500).json({ error: "Erro interno ao buscar os usuarios"});
    }
};

const criarUsuario = async (req, res) => {
    try{
        const{nome, email} = req.body;
        const novoUsuario = await usuarioService.criarUsuario({nome, email})

        req.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso!',
            usuario: novoUsuario,
        })
    } catch (erro) {
        res.status(400).json({erro: erro.message})
    }
}

module.exports = {listarUsuarios, listarUsuariosId, criarUsuario}