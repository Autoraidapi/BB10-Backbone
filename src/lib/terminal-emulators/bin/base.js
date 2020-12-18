cordova.define('cordova/base', function(require, exports, module) {

	function Ctor(){};
	
	function Base(){
		
	}
	
	Base.prototype = Object.create(Ctor.prototype, {
		constructor : {
			value : Base
		}
	});
	
	module.exports = Base;
	
});