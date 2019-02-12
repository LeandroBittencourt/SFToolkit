module.exports = function(app){
    var loginController = app.controllers.login;
    console.log('Index Router');
    app.get('/login', loginController.login);
    app.get('/oauth2/callback', loginController.callback);
    
}