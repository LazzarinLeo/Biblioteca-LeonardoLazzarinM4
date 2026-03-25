const acervo =[
    {
        id:1,
        titulo: "A Biografia de Lucas Pimentel - O Honrado",
        autor: "Lucas Pimentel Bento",
        disponivel: false
    },
    {
        id:2,
        titulo: "Elden Ring Custa 300 Reais com a Dlc Fica 500, Japoneses Safados Querem meu Dinheiro...",
        autor: "G.R.R Martin & Hidetaka Myiazaki",
        disponivel: true
    },
    {
        id:3,
        titulo: "Carros 10 - Carros VS A Ditadura",
        autor: "J.R.R Tolkien, G.R.R Martin, Quentin Tarantino, Celso Ramos, Crescida Carwell, Padre Marcelo de Rossi, Machado de Assis, Fernando Pessoa, Julio Verne, Akira Toriyama",
        disponivel: true
    }
];

const buscarLivros = async () => {
    return acervo;
};

const buscarLivrosPorID = async (id) => {
    const livro = acervo.find(item => item.id === Number(id));
    return livro || null;
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