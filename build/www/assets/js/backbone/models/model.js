define(['localforageBackbone'],function(Sync) {

    var Model = Backbone.Model.extend({
        preinitialize : function(){

        },
        defaults : function(){
            return {

            }
        },
        sync : Backbone.localforage.sync('model'),
        initialize : function(){

        }
    });

    return Model;
    
});