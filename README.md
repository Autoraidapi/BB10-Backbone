# BB10-Backbone

This is a new fork of [DevTools Pro for BlackBerry 10](https://github.com/anpho/DevTools-Pro) from another developer.

I hope to address some issues with the javascript in this repository, and use it's strategy for binding javascript front end code to the blackberry cascades c++ framework with qml.

This list outlines some of the things that I would change. I will provide further details to what and why I would make these changes.

- Formatting
- Mixins
- Sandboxing
- Threads
- MessageChannel
- Persistance
- WebViews
- PostMessage
- Version
- BackEndHost
- FrontEndHost

The console included in the original repository is from [javascript-sandbox-console](https://github.com/openexchangerates/javascript-sandbox-console).

* [RequireJS](https://requirejs.org/)

- RequireJS text module
- RequireJS link module
- RJS Code Compiler

Structure of front end client code must be wrapped by a graph structure. The tool will use the vertexes of the graph as references and build a single file. 

The text modules can and will be converted from html to javascript which will also remove the XHR requests made to the template files from requirejs and backbone.

## HTTP

## JS

## CSS
