define([
    'backbone', 
    'assets/js/backbone/collections/collection',
    'assets/js/backbone/views/container',
    'assets/js/backbone/routes/router'
], function(Backbone, Collection, Container, Router){
    
    function Ctor(){
        this.preinitialize.apply(this,arguments);    
  
        this.initialize.apply(this,arguments);
    };	
    
    Ctor.prototype = {	
        preinitialize : function(){},
        initialize : function(){}
    };
    
    Ctor.prototype.toString = function(){
        return ''.concat(this.value,'');
    };
    
    Ctor.prototype.valueOf = function(){
        return this;
    };
    
    function Main(value){
        Ctor.call(this);
        // router

    }
    
    Main.prototype = Object.create(Ctor.prototype,{
        constructor: {
            configurable : true,
            enumerable: true,
            value:Main,
            writable:true
        }
    });

    return Main;
    
});