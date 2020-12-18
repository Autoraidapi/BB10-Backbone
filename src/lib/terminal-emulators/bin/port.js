cordova.define('cordova/port', function(require, exports, module) {

	function Ctor(){};
	
	function Port(){
		this.isActive = false;
	}
	
	Port.prototype = Object.create(Ctor.prototype, {
		constructor : {
			value : Port
		}
	});
	
	module.exports = Port;
	
});