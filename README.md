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

Following the barebones structure of the backbone & backbone requirejs examples from [Todo MVC application](https://github.com/tastejs/todomvc), offers abstraction of several hard to manage processes and events. The other backbone examples like the typescript version are setup with some smells that are not needed when you use backbones latest version.

Front end code must be wrapped by a graph structure. The tool will use the vertexes of the graph as references and build a single file. 

The text modules can and will be converted from html to javascript which will also remove the XHR requests made to the template files from requirejs and backbone.

Original build removed the iframe sandboxing so results could render to his webview. 

This hinders the application in compounding ways specific to HTML 5 and JavaScript. 

I will explain how to use transferable messaging to not only speed up the process of input output, but keep the sandbox window for evaluation and remote web crawling. All synchronized with asynchronous processes using IndexedDB as the persistence layer.

If successful, then it will be possible to pipe the results into a webview and proivide a primitive http based web browser. 

## CSS
