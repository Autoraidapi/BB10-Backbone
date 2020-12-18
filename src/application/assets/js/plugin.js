/**
 * mime/type dictionary
 * encoding/decoding helpers
 * expose an object to global
 */

const Application = {
    Scope : {
        main : null
    },
    Models : {},
    Collections : {},
    Views : {},
    Routes : {}
};

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.Model}
*/
Application.Models.Model = Backbone.Model.extend({
    defaults : function(){
        return {
            order : Application.Scope.main.container.collection.nextOrder()
        }
    },
    validate : function(){
        // regex match
        // regex test
        // setup channel 
    },
    sync : Backbone.localforage.sync('model')
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.View}
*/
Application.Collections.Collection = Backbone.Collection.extend({
    model : Application.Models.Model,
    sync : Backbone.localforage.sync('collection'),
    nextOrder : function () {
        return this.length ? this.last().get('order') + 1 : 1;
    },
    comparator: 'order' 
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.View}
 * 
 * request,response
 * arraybuffer
 * transfer
 * digest
 * 
*/
Application.Views.Section = Backbone.View.extend({
    template: _.template('\
        <% if(/^data:[^;]+;base64,/.test(obj.ext)){ %>\
            "<%= obj.src %>.<%= obj.ext %>"\
        <% } %>\
    '),
    render: function (src, ext) {
        // Uint8Array();
        this.$el.html(this.template({
            src: src,
            ext: ext
        }));
        return this;
    }
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.View}
*/
Application.Views.Container = Backbone.View.extend({
    el: $('#main'),
    collection : new Application.Collections.Collection(),
    initialize: function () {
        this.$article = this.$('article');
        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'all', _.debounce(this.render, 0));
    },
    passAttributes : function(){
        return {
            order : this.collection.nextOrder()
        }
    },
    addOne : function (model) {
        var view = new Application.Views.Section({ model : model });
        this.$article.html(view.render().el);
    },
    create : function(){
        this.create(this.collection.passAttributes());
    }
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.Router}
*/
Application.Routes.Router = Backbone.Router.extend({
    initialize : function(){
        this.container = new Application.Views.Container();
    },
    routes: {
        'image(/:src)(/:ext)': 'image'
    },
    image : function(src,ext){
        this.image = new Image();
        this.image.crossOrigin = 'anonymous';
        
    }
});


with(Application.Scope){
    main = new Application.Routes.Router();
}
