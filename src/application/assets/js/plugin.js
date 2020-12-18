/**
 * mime/type dictionary
 * encoding/decoding helpers
 * expose an object to global
 */

const Application = {
    Scope: {
        main: null
    },
    Models: {},
    Collections: {},
    Views: {},
    Routes: {}
};

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.Model}
 * 
 * processing model for transfer data
 * indexedDB
 * messagechannel
 * webworkers
 * transfer
 * order
 * guid
 */
Application.Models.Model = Backbone.Model.extend({
    preinitialize: function () {
        this.worker = new Worker(
            URL.createObjectURL(
                new Blob(['self.onmessage=function(event){self.postMessage(event, [event.data]);};'], {
                    type: "text/javascript"
                })
            )
        );
    },
    defaults: function () {
        return {
            // additional attributes 
            // these will be dynamically evaluated, then interpolated inside the template string
            order: Application.Scope.main.container.collection.nextOrder()
        }
    },
    validate: function () {
        // regex match
        // regex test
        // setup channel 
    },
    initialize: function () {
        this.worker.addEventListener("message", this.message.bind(this), true);
    },

    sync: Backbone.localforage.sync('model'),

    // async
    xhr: function (composite) {
        var request = new XMLHttpRequest();
        request.open('GET', composite, true);
        request.responseType = 'arraybuffer';
        request.addEventListener('load', function (event) {
            this.post(event.data);
        }, false);
        request.send(null);
    },
    post: function (message) {
        this.worker.postMessage(message, [message]);
    },
    close: function () {
        this.worker.terminate();
    },
    message: function (event) {
        // have the option to use synchronous filereader
        // have the option to use synchronous filesystem methods here with deprecated webkitfilesystem
    }
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.View}
 */
Application.Collections.Collection = Backbone.Collection.extend({
    preinitialize: function () {},
    model: Application.Models.Model,
    sync: Backbone.localforage.sync('collection'),
    nextOrder: function () {
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
    preinitialize: function () {},
    template: _.template('\
        <% if(/^data:[^;]+;base64,/.test(obj.ext)){ %>\
            "<%= obj.src %>.<%= obj.ext %>"\
        <% } %>\
    '),
    render: function (src, ext) {
        // have the option to use deprecated getUserMedia here to stream a context to a canvas
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
    preinitialize: function () {},
    el: $('#main'),
    collection: new Application.Collections.Collection(),
    initialize: function () {
        this.$article = this.$('article');
        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'all', _.debounce(this.render, 0));
    },
    passAttributes: function () {
        return {
            order: this.collection.nextOrder()
        }
    },
    addOne: function (model) {
        var view = new Application.Views.Section({
            model: model
        });
        this.$article.html(view.render().el);
    },
    create: function () {
        this.collection.create(this.passAttributes());
    }
});

/**
 * @constructor
 * @extends {Backbone.Events, Backbone.Router}
 */
Application.Routes.Router = Backbone.Router.extend({
    preinitialize: function () {},
    initialize: function () {
        this.container = new Application.Views.Container();
    },
    routes: {
        'image(/:src)(/:ext)': 'image'
    },
    image: function (src, ext) {
        this.image = new Image();
        this.image.crossOrigin = 'anonymous';

    }
});


with(Application.Scope) {
    main = new Application.Routes.Router();
}