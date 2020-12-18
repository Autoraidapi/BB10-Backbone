define(function() {

    Backbone.View.extend({
        
        preinitialize : function(){
            // list noop functions
        },

        events : {},

        initialize : function(){
            this.listenTo({}, 'change', this.render);
            this.listenTo({}, 'destroy', this.remove);
            /* */
            this.listenTo({},  'visible', this.toggleVisible);
        },

        render : function(){}

    })
    
});