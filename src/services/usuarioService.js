const usuarios = [
    {
        id: 1,
        nome: "Lucas Pimentel Bento",
        email: "luquinhasjogos@gmail.com"
    },
    {
        id: 2,
        nome: "Kelving Monteiro",
        email: "kelvingmonteiro@gmail.com"
    },
    {
        id: 3,
        nome: "Malcon Maciel JR",
        email: "filhodomalcon@gmail.com"
    }
];

const buscarUsers = async () => {
    return usuarios;
};

const buscarUsersPorID = async () => {
    const user = usuarios.find(item => item.id === Number(id));
    return user || null;
}

const criarUsuario = async => ({nome, email}) =>{
    if (!nome || !email){
        throw new Error('Nome e Email são necessários');
    }
    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
    };
    usuarios.push(novoUsuario);
    return novoUsuario;
};

module.exports = { buscarUsers, buscarUsersPorID, criarUsuario}