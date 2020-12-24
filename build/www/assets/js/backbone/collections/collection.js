define(['localforageBackbone','assets/js/backbone/models/model'],function(Sync, Model) {

        var Collection = Backbone.Collection.extend({
            preinitialize : function(){
    
            },
            model : Model,
            sync : Backbone.localforage.sync('collection'),
            initialize : function(){
    
            }
        });
    
        return Collection;
       
});