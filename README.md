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
- AMDLoader

The console included in the original repository is from [javascript-sandbox-console](https://github.com/openexchangerates/javascript-sandbox-console).

---

- [Invocation Framework](https://developer.blackberry.com/native/documentation/device_platform/invocation/invocation_framework.html)


## HTTP


## JS

Not very clearly defined steps to running javascript in a native application.

[QT Bridge](https://github.com/Autoraidapi/bookmarklets/tree/master/assets/plugins/webworks/QtBridge)

Concepts and configurations to run JS with a native app.

[JNEXT](https://github.com/Autoraidapi/bookmarklets/tree/master/assets/plugins/webworks/Mongoose)

Concepts and configurations to use JNEXT. 


Following the barebones structure of the backbone & backbone requirejs examples from [Todo MVC application](https://github.com/tastejs/todomvc), offers abstraction of several hard to manage processes and events. The other backbone examples like the typescript version are setup with some smells that are not needed when you use backbones latest version.

Original build of this fork removed the iframe sandboxing so results could render to his webview. 

This hinders the application in compounding ways specific to HTML 5 and JavaScript. 

I will explain how to use transferable messaging to not only speed up the process of input output, but keep the sandbox window for evaluation, allow checksums, and remote web crawling. All synchronized with asynchronous processes using IndexedDB as the persistence layer.

If successful, then it will be possible to pipe the results into a webview and proivide a primitive http based web browser. 

Further additions would involve enumeration of available javascript api's and mixins which bind to the BlackBerry10 invocation framework.

This would allow simple uri's registered this way to pass encoded messages to other uri's registered the same way and not need any configuration of the endpoints, it's left to the user with browser url smarttags or share target. 

Strings encoded as suffixes to the uri would need to be decoded within an event before the final load event of the applications document or window. 



## CSS
