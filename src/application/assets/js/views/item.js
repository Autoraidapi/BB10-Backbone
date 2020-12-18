define(['link!templates/item.html'],function(template) {

    Backbone.View.extend({
        
        preinitialize : function(){
            // list noop functions
        },
        
        template : _.template($(template).html()),
        
        events : {},


    
});
