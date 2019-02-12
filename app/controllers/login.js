module.exports = function(app){
    const settings = require("../../settings.json");
    
    this.login = function(req, res, next){
        console.log("Login Controller");
        console.dir(settings);
        res.redirect('https://login.salesforce.com/services/oauth2/authorize?' 
            + '&response_type=code'
            + '&client_id=' + settings['consumer-key']
            + '&redirect_uri=' + settings['redirect-uri']
        );
        
        
    }

    this.callback = function (req,res,next){
        console.log("callback");
        res.send(req.query.code);
    }
    
    return this;
}