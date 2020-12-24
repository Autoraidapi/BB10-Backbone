define(['backbone'],function(Backbone) {

    var Container = Backbone.View.extend({
        preinitialize : function(){
            // list noop functions
        },

        // All Events that sinkdown from this layer of the apps/DOM topology
        events : {},

        initialize : function(){
            // Emitter responses from changes in our persistence layer
			this.listenTo(/**/[], 'add', this.addOne);
			this.listenTo(/**/[], 'reset', this.addAll);
			this.listenTo(/**/[], 'change:completed', this.filterOne);
			this.listenTo(/**/[], 'filter', this.filterAll);
			this.listenTo(/**/[], 'all', _.debounce(this.render, 0));
        },

        render : function(){}

        // one

        // all

        // generator

        // creation(this.generator())

    });

    return Container;
    
});