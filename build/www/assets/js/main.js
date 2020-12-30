define([
    'backbone', 
    'assets/js/backbone/collections/collection',
    'assets/js/backbone/views/container',
    'assets/js/backbone/routes/router'
], function(Backbone, Collection, Container, Router){    
    
    function Main(){
        
        this.router = new Router();
        Backbone.history.start();
    }

    return Main;
    
});