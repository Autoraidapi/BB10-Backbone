
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
		app.testPluginCalls();
	},
	testPluginCalls: function() {
		//if (community && community.mongoose) {
		//	// app.writeOut('Results of starting Mongoose server:\n ' + community.mongoose.start({}));
		//	// app.writeOut('Results of starting Mongoose server:\n ' + community.mongoose.start({ "listening_ports" : "8080" }));
		//	app.writeOut('Results of starting Mongoose server:\n ' + community.mongoose.start({ "listening_ports" : 8080 }));
		//	app.writeOut('Results of stopping Mongoose server:\n ' + community.mongoose.stop());
		//} else {
		//	app.writeOut("Plugin was not found");
		//}
	},
	writeOut: function(message) {
		var output = document.getElementById('results');
		output.innerText = output.innerText + message;
		output.appendChild(document.createElement('br'));
		console.log(message);
	}
};