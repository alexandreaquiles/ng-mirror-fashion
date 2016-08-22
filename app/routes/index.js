var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    app.route('/carrinho')
        .get(api.lista);

    app.route('/carrinho/:id')
        .delete(api.deleta);
    
    app.route('/produtos/:id')
        .get(api.detalha)
};