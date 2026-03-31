const CHAVE_ACESSO = "RALPH"

const autenticar = (req, res, next) => {
    const autHeader = req.headers['authorization']
    
    if(!autHeader){
        return res.status(401).json({
            erro: "Acesso Negado: Usuário não indentificado"
        })
    }

    const token = autHeader.split('')[1]

    if(token !== CHAVE_ACESSO){
         return res.status(403).json({
            erro: 'Banido'
         })
    }
    next()
}

module.exports = autenticar