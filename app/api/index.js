var produtos = [
    {
        id : 1,
        codigo: "#00AMT01",
        nome : "FURLAN MISTERY CARDIGAN",
        descricao: "Produto de alta qualidade, importado diretamente da Zâmbia com textura inigualável.",
        imagem: "img/produto-1.jpg",
        preco: 120.00,
        quantidade: 1
    },
    {
        id : 2,
        codigo: "#00AMT02",
        nome : "ASOS MARITAL COLLAR CARDIGAN",
        descricao: "Produto raro vindo diretamente da Líbia. Peça fundamental no guarda-roupa de qualquer pessoa pós-moderna.",
        imagem : "img/produto-2.jpg",
        preco : 74.00,
        quantidade: 1
    },
    {
        id : 3,
        codigo: "#00AMT03",
        nome : "AOS MERINO SHAWL COLLAR CARDIGAN",
        descricao: "Apenas 100 peças foram produzidas no Azerbaijão. O tecido é tão leve, que você terá a sensação de que esta flutuando. Produto adquirido por vários artistas espalhados pelo mundo.",
        imagem : "img/produto-3.jpg",
        preco : 109.00,
        quantidade: 1
    }
];

var api = {}

api.lista = function(req, res){
    res.json(produtos);
}

api.deleta = function(req, res){
    for(var i = 0; i < produtos.length; i++) {
        if(produtos[i].id == req.params.id) {
            produtos.splice(i, 1);
            break;
        }
    }
    res.sendStatus(204);
}

api.detalha = function(req, res){
    var produto;
    for(var i = 0; i < produtos.length; i++) {
        if(produtos[i].id == req.params.id) {
            produto = produtos[i];
            break;
        }
    }
    res.json(produto);
}


module.exports = api;