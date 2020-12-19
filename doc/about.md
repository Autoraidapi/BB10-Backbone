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

## Blackberry

[Accessibility](https://developer.blackberry.com/native/reference/cascades/bb__cascades__componenta11yspecialization.html)

[Invocation Framework](https://developer.blackberry.com/native/documentation/device_platform/invocation/invocation_framework.html)

## JS

Not very clearly defined steps to running javascript in a native application.

[QT Bridge](https://github.com/Autoraidapi/bookmarklets/tree/master/assets/plugins/webworks/QtBridge)

[JNEXT](https://github.com/Autoraidapi/bookmarklets/tree/master/assets/plugins/webworks/Mongoose)

A second hop from reparse

