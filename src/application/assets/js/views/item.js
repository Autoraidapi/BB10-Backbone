define(['link!templates/item.html'],function(template) {

    Backbone.View.extend({
        
        preinitialize : function(){
            // list noop functions
        },
        
        template : _.template($(template).html()),
        
        events : {},

        initialize : function(){
            
            this.listenTo();
            this.listenTo();
            this.listenTo();
        },
        render : function(){
            
            // this.template(this.model.toJSON());
            
            return this;
        }

    })
    
});
