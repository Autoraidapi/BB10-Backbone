define(['backbone'], function(Backbone){
    
    function Ctor(){
        this.preinitialize.apply(this, arguments);
        this.initialize.apply(this, arguments);
    };

    Ctor.prototype.preinitialize = function(){};
    Ctor.prototype.initialize = function(){};

    function Main(){
        Ctor.call(this);
    };

    Main.prototype = Object.create(Ctor.prototype, {
        constructor : {
            value : Main,
            enumerable : true,
            configurable : true,
            writeable : true
        }
    });

    _.extend(Main.prototype, {
        preinitialize : function(){},
        initialize : function(){}
    });

    return Main;

});