define(['localforageBackbone','assets/js/backbone/models/model'],function(Sync, Model) {

        var Collection = Backbone.Collection.extend({
            preinitialize : function(){},
                
            model : Model,
            sync : Backbone.localforage.sync('collection'),
            initialize : function(){
    
            },
            print : function(){
		var i, length = this.length;
		for(i = length - 1;i >= 0;i--){
			console.log(
				JSON.stringify(this.models[i].toJSON(), null, 2)
			);
		}            
            },
            sprint : function(){ this.printer(this.length); },
            printer : function(){
		var self = this;
		if(length <= 0) return;
		length--;
		setTimeout(function(){
			self.printer(length);
			this.models[length].toJSON();
		}, 25);            
            },                
        });
    
        return Collection;
       
});
