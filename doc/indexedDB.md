

BlackBerry WebKit Storage

- localStorage

limit has changed, was 15mb now it is 4mb

- sessionStorage

- webSQL

- indexedDB

this may have been one of the last and latest updates for BB10's webkit, idb is the apps private database

driver can be switched to local or websql. Both are wrapped with promise polyfill and return thenable objects


Backbone and localforage setup http grammar to an indexedDB.

I have yet to crash idb on BB10 when using it. It's not hard to crash idb on BB10.