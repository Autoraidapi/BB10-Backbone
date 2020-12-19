var api = {};

function toArray(args) {
	var array = [], i, length = args.length;
	for (i = 0; i < length; ++i) {
		array[i] = args[i];
	}
	return array;
}

function parse(string) {
	return string.split(/\s+/);
}

function format(array) {
	while (array.length > 0 && array[0] === "") {
		array = array.slice(1);
	}
	while (array.length > 0 && array[array.length - 1] === "") {
		array = array.slice(0, array.length - 1);
	}
	return array;
}

function first(array, n, guard) {
	return n != null && !guard ? [].slice.call(array, 0, n) : array[0];
}

function rest(array, index, guard) {
	return [].slice.call(array, index == null || guard ? 1 : index);
}

function last(array) {
	return array[array.length - 1];
}

function reparse(string) {
	var tokens = parse(string);
	var array = format(tokens);
	var wrapper = api[first(tokens)];
	wrapper.apply(this, rest(array));
}

function feed(array){
	return toArray(array).join(' ');
}
function hop(url, kvs) {
  var url = url + "?";
  for (var k in kvs) {
    var v = kvs[k];
    url += k + "=" + escape(v);
  }
  location = url;
}
api.test = function () {
	alert(feed(arguments));
};
api.wiki = function(){	      
	hop("https://en.wikipedia.org/wiki/Special:Search", {  
		search : feed(arguments)  
	});
}