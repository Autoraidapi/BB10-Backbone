requirejs.config({
    
    /* base and assets are configured for the bundler script */

    baseUrl: 'vendor',

	shim: {
		underscore: { exports: '_' },
		backbone: { deps: [ 'underscore', 'jquery' ], exports: 'Backbone' },
		localforageBackbone : { deps: ['backbone'], exports: 'Backbone.localforage.sync' }
    },
    
    paths: {
        assets : '../assets',
        underscore : '',
        jquery : '',        
        backbone : '',
        localforage : '',
        localforageBackbone : '',
        link : 'link',
        text : 'text'
    }

});

requirejs(['backbone', 'localforageBackbone'], function(Backbone){
    
});
