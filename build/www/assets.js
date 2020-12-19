(function (global) {

    requirejs.config({

        baseUrl: 'vendor',

        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            localforageBackbone: {
                deps: ['backbone'],
                exports: 'Backbone.localforage.sync'
            }
        },

        paths: {
            assets: '../assets',
            underscore: 'underscore',
            jquery: 'jquery',
            backbone: 'backbone',
            localforage: '',
            localforageBackbone: '',
            link: 'link',
            text: 'text'
        }

    });

    requirejs(['assets/js/main'], function (Main) {
        if (typeof global !== 'undefined') {
            global.app = new Main();
        }
    });

})(this);