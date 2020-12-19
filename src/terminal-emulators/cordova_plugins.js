cordova.define('cordova/plugin_list', function(require, exports, module) {

	module.exports = [
		{   "file": "bin/base.js",  "id": "com.blackberry.base.client",  "clobbers": [ "blackberry.base" ]   }	
	];
	
	module.exports.metadata = {
		"com.blackberry.base" : "0.0.1"
	}	
});