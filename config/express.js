var express = require('express');
var consign = require('consign');

module.exports = function () {
  var app = express();
  //process.env.PORT usado para o Heroku buscar a porta dinamicamente
  app.set('port', process.env.PORT || 3000);

  //middleware
  app.use(express.static('./public'));

  //Determina a view engine que esta sendo utilizada
  //app.set('view engine', 'ejs');
  //diretorio onde estão localizada as views
  //app.set('views', './app/views');

  
  //carregando dependências na intancia do Express
  consign({cwd:'app'})
    .include('controllers')
    .then('routers')
    .into(app);

  return app;
};
