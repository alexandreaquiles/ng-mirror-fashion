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

function buscaPorId (id) {
    for(var i = 0; i < produtos.length; i++) {
        if(produtos[i].id == id) {
            return i;
        }
    }
    return -1;
}

function lista (req, res) {
    res.json(produtos);
}

function deleta (req, res) {
    var i = buscaPorId(req.params.id);
    if(i > 0) {
        produtos.splice(i, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

function detalha (req, res) {
    var i = buscaPorId(req.params.id);
    if(i > 0) {
        res.json(produtos[i]);
    } else {
        res.sendStatus(404);
    }
}


module.exports = function (app) {
    app.route('/api/carrinho').get(lista);
    app.route('/api/carrinho/:id').delete(deleta);
    app.route('/api/produtos/:id').get(detalha);
};