module.exports = function(app){
    var indexController = app.controllers.index;
    console.log('Index Router');
    app.get('/', indexController.index);
    app.get('/index', indexController.index);
}