const Application = {
    Scope : {
        main : null
    },
    Models : {},
    Collections : {},
    Views : {},
    Router : {}
};

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.Model}
*/
Application.Models.Model = Backbone.Model.extend({
    defaults : function(){
        return {
            
        }
    }
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.View}
*/
Application.Collections.Collection = Backbone.Collection.extend({
    model : Application.Models.Model,
    nextOrder : function () {
        return this.length ? this.last().get('order') + 1 : 1;
    },
    comparator: 'order' 
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.View}
*/
Application.Views.Section = Backbone.View.extend({
    template: _.template('\
        <% if(obj.ext.match(/svg|png|ico|jpg|jpeg/)){ %>\
            "<%= obj.src %>.<%= obj.ext %>"\
        <% } %>\
    '),
    render: function (src, ext) {
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
        this.create(this.passAttributes());
    }
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.Router}
*/
Application.Routes.Routes = Backbone.Router.extend({
    initialize : function(){
        this.container = new Application.Views.Container();
    },
    routes: {
        'image(/:src)(/:ext)': 'image'
    }
});


with(Application.Scope){
    main = new Application.Routes.Router();
}
