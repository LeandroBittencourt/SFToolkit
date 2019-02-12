module.exports = function(app){
    
    this.index = function(req, res, next){
        console.log("Index Controller");
        return res.send("Index Page");
    }
    
    return this;
}