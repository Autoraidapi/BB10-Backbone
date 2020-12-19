requirejs.config({
	baseUrl: '',
	paths: {       
		cdn : 'https://assets.codepen.io/1674766',    
		s3 : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1674766',
	}
});

requirejs(['cdn/bootstrap-native.min'], function(BSN){
	window.Bootstrap = BSN;
});