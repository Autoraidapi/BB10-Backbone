
/**
 * @constructor
 * @extends {Backbone.Events, Backbone.View}
*/
const Section = Backbone.View.extend({
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
const Container = Backbone.View.extend({
    el: $('#main'),
    initialize: function () {
        this.$article = this.$('article');
    },
    renderSection : function (src, ext) {
        var view = new Section();
        this.$article.html(view.render(src, ext).el);
    }
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.Router}
*/
const Router = Backbone.Router.extend({
    initialize : function(){
        this.container = new Container();
    },
    routes: {
        'image(/:src)(/:ext)': 'image'
    },
    image : function (src, ext) {
        this.container.renderSection(src, ext);
    }
});
