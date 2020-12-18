var version="1.0";!function(e){function t(e,t){return e.toLowerCase()<t.toLowerCase()?-1:1}function n(e,o,r){var c,i,s="",a="",l=[],u=[],d=!1;r=r||[];try{a={}.toString.call(e)}catch(e){a="[object Object]"}for(i=0;i<r.length;i++)if(e===r[i]){d=!0;break}if(d)s="[circular]";else if("[object String]"==a)s='"'+e.replace(/"/g,'\\"')+'"';else if("[object Array]"==a){for(r.push(e),s="[",c=0;c<e.length;c++)l.push(n(e[c],o,r));s+=l.join(", ")+"]"}else if("[object Object]"==a){for(c in r.push(e),s="{",e)u.push(c);for(u.sort(t),c=0;c<u.length;c++)l.push(n(u[c],void 0,r)+": "+n(e[u[c]],o,r));s+=l.join(", ")+"}"}else if("[object Number]"==a)s=e+"";else if("[object Boolean]"==a)s=e?"true":"false";else if("[object Function]"==a)s=e.toString();else if(null===e)s="null";else if(void 0===e)s="undefined";else if(null==o){for(c in r.push(e),s=a+"{\n",e)u.push(c);for(u.sort(t),c=0;c<u.length;c++)try{l.push(u[c]+": "+n(e[u[c]],!0,r))}catch(e){e.name}s+=l.join(",\n")+"\n}"}else try{s=e+""}catch(e){}return s}function o(e){return((e=e instanceof Array?e.join(", "):e)||"").replace(/[<&]/g,(function(e){return{"&":"&amp;","<":"&lt;"}[e]}))}function r(e){var t=null,r="response",c=function(e){var t,n=[];if(":"==e.substr(0,1))return t=(n=e.substr(1).split(" ")).shift(),(_[t]||d).apply(this,n)}(e);if(c)return["info",c];if(null!==K){var i=new XMLHttpRequest,s="data="+encodeURIComponent(e);return i.open("POST","/remote/"+K+"/run",!0),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(s),P(""),["info","sent remote command"]}try{"CoffeeScript"in T.contentWindow&&(e=T.contentWindow.CoffeeScript.compile(e,{bare:!0})),t=T.contentWindow.eval(e),T.contentWindow.$_=t}catch(e){console.error(e),t=e.message,r="error"}return[r,o(n(t))]}function i(t,n,o){if(t=(t||"").replace(/^\s+|\s+$/g,""),void 0===n&&(I.push(t),function(e){if("undefined"==typeof JSON)return;try{sessionStorage.setItem("history",JSON.stringify(e))}catch(e){}}(I),R))try{e.history.pushState(t,t,"?"+encodeURIComponent(t))}catch(e){}K&&!o||a(t);var c=document.createElement("div"),i=document.createElement("li"),s=document.createElement("span");E.parentNode;if(void 0!==(o=o||r(t))&&(c.className="response",s.innerHTML=o[1],"info"!=o[0]&&prettyPrint([s]),c.appendChild(s),i.className=o[0],i.innerHTML='<span class="gutter"></span>',i.appendChild(c),l(i),E.parentNode.scrollTop=0,!D.className&&(S.value="",q)))try{document.getElementsByTagName("a")[0].focus(),x.focus(),document.execCommand("selectAll",!1,null),document.execCommand("delete",!1,null)}catch(e){}M=I.length}function s(e,t){var n=document.createElement("li"),r=document.createElement("div");r.innerHTML="string"==typeof e?o(e):e,prettyPrint([r]),n.className=t||"log",n.innerHTML='<span class="gutter"></span>',n.appendChild(r),l(n)}function a(e){var t=document.createElement("li");if(t.className="echo",t.innerHTML='<span class="gutter"></span><div>'+o(e)+'<a href="/?'+encodeURIComponent(e)+'" class="permalink" title="permalink">link</a></div>',H=null,E.querySelector)H=E.querySelector("li.echo")||null;else{var n,r=document.getElementsByTagName("li"),c=r.length;for(n=0;n<c;n++)if(-1!==r[n].className.indexOf("echo")){H=r[n];break}}l(t,!0)}function l(e,t){t?E.firstChild?E.insertBefore(e,E.firstChild):E.appendChild(e):E.insertBefore(e,H||E.lastChild.nextSibling)}function u(e){var t=e.which||e.keyCode;if(38==t&&1==e.shiftKey){D.className="",x.focus();try{localStorage.large=0}catch(e){}return!1}if(40==t&&1==e.shiftKey){D.className="large";try{localStorage.large=1}catch(e){}return x.focus(),!1}}function d(){}function f(){for(var t=T.contentDocument||T.contentWindow.document,n=0;n<arguments.length;n++)!function(n){var o=document.createElement("script");o.src=n,o.onload=function(){e.info("Loaded "+n,"http://"+e.location.hostname),n==A.coffeescript&&e.info("Now you can type CoffeeScript instead of plain old JS!")},o.onerror=function(){s("Failed to load "+n,"error")},t.body.appendChild(o)}(A[arguments[n]]||arguments[n]);return"Loading script..."}function h(t){T.contentWindow.document;var n=document.createElement("script"),o="loadDOM"+ +new Date;return n.src="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+encodeURIComponent(t)+"%22&format=xml&callback="+o,e[o]=function(n){if(n.results.length){var r=n.results[0].replace(/type="text\/javascript"/gi,'type="x"').replace(/<body.*?>/,"").replace(/<\/body>/,"");T.contentWindow.docs||(T.contentWindow.docs={}),T.contentWindow.docs[t]=(new DOMParser).parseFromString(r,"text/html"),e.info('DOM load complete. Available as docs["'+t+'"]')}else s("Failed to load DOM","error");try{e[o]=null,delete e[o]}catch(e){}},document.body.appendChild(n),"Loading url into DOM..."}e.info=function(e){var t=document.createElement("li");t.className="info",t.innerHTML='<span class="gutter"></span><div>'+o(e)+"</div>",l(t)};var m={},v=!1;function g(e,t){var n=[];if(m[e])if(t)for(var o,r=0;m[e].length,o=m[e][r];r++)0===o.indexOf(t)&&o!=t&&n.push(o.substr(t.length,o.length));else n=m[e];else{try{T.contentWindow.alert,T.contentWindow.alert=function(){},m[e]=T.contentWindow.eval("console.props("+e+")").sort(),delete T.contentWindow.alert}catch(t){m[e]=[]}"undefined"==m[e][0]&&(ccOptions[e]=[]),v=0,n=m[e]}return n}function y(e){var t,n=x.textContent.split(/[;\s]+/g).pop(),o=n.split("."),r=F(e),c=[];if(n)if((c="."==n.substr(-1)?g(n=n.substr(0,n.length-1)):g(o.slice(0,o.length-1).join(".")||"window",o[o.length-1])).length){if(!1===(v=9==r?1!==c.length&&(e.shiftKey?0==v?c.length-1:v-1:v==c.length-1?0:v+1):0)?G():(x.nextSibling||((t=document.createElement("span")).className="suggest",S.appendChild(t)),x.nextSibling.innerHTML=c[v],S.value=S.textContent),9==r)return!1}else v=!1;else v=!1;!1===v&&x.nextSibling&&b(),S.value=S.textContent}function b(){q||S.setAttribute("rows",1),q&&x.nextSibling&&x.parentNode.removeChild(x.nextSibling)}function C(){var e=[""];if("undefined"==typeof JSON)return e;try{e=JSON.parse(sessionStorage.getItem("history")||'[""]')}catch(e){}return e}e._console={log:function(){for(var e=arguments.length,t=0;t<e;t++)s(n(arguments[t],!0))},dir:function(){for(var e=arguments.length,t=0;t<e;t++)s(n(arguments[t]))},props:function(e){var t=[];try{for(var n in e)t.push(n)}catch(e){}return t}},document.addEventListener?e.addEventListener("message",(function(e){if("string"==typeof e.data){if(0===e.origin.indexOf("chrome-ext"))return;i(e.data)}}),!1):e.attachEvent("onmessage",(function(){i(e.event.data)}));var S=document.getElementById("exec"),k=S.form||{},E=document.getElementById("output"),x=document.getElementById("exec"),j=void 0!==e.top.JSCONSOLE,T=j?e.top.JSCONSOLE:document.createElement("iframe"),N=null,O="window.top._console",I=C(),L=void 0!==e.history.pushState,M=0,A={paper:"https://assets.codepen.io/1674766/paper-full.js",underscore:"https://assets.codepen.io/1674766/underscore.js",backbone:"https://assets.codepen.io/1674766/backbone.js",localforage:"https://assets.codepen.io/1674766/localforage.js",parsejs:"https://assets.codepen.io/1674766/parse-js.js"},D=document.getElementsByTagName("body")[0],H=null,R=!(!e.history||!e.history.pushState),W=null,K=null,U=null,_={help:function(){var e=[":load &lt;script_url&gt; - to inject","      load also supports shortcuts, like jquery or lodash: eg. :load jquery",":load &lt;url&gt; - to inject new DOM",":service - create a microservice endpoint for this page",":clear or :c - to clear the history (accessed using cursor keys)",":history - list current session history",":about","$_ for last value","","<p>To inject JS Console, bookmark this: <a href=\"javascript:window.open(%22about:blank%22).document.write(%22%3Cbody%3E%3Cscript%20onload='window.page=opener'%20src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1674766/inject.js'%3E%3C/script%3E%3Cbody%3E%22);\">Inject Console</a>.</p>","<p>For more details on this console, check out my article <a target=_blank href='https://hackernoon.com/universal-javascript-console-for-browser-electron-nw-js-node-js-and-windows-272e4bd6f9d9'>Universal Console</a></p>","<p>For more details on using the :service command, check out my article <a target=_blank href='https://hackernoon.com/turn-any-website-into-a-microservice-serverless-endpoint-4a12446ede7'>:service Article</a></p>","",'<span style="color: green">version: '+version+"</span>"];return j&&e.push(":close - to hide the JS Console"),e.join("\n")},about:function(){return'Built by <a target="_blank" href="http://twitter.com/rem">@rem</a> <a target="_blank" href="https://github.com/remy/jsconsole">open source</a> Extended by <a target="_blank" href="http://twitter.com/mikeptweet">@mikeptweet</a><br/>More information here <a target="_blank" href="https://hackernoon.com/universal-javascript-console-for-browser-electron-nw-js-node-js-and-windows-272e4bd6f9d9">Help</a>'},load:function(e){return navigator.onLine?arguments.length>1||A[e]||-1!==e.indexOf(".js")?f.apply(this,arguments):h(e):"You need to be online to use :load"},service:function(){var t="./deepstream.js",n=T.contentDocument||T.contentWindow.document,o=n.createElement("script");return o.src=t,o.onload=function(){var t;null==(t=top.JSCONSOLE?top.JSCONSOLE.contentWindow:top.sandbox.contentWindow)&&(t=top.sandbox),w="ws://",p=":80",c="https:"==t.location.protocol,1==c&&(w="wss://",p=":443"),t.client=t.deepstream(w+"pubsub.mybluemix.net"+p),t.client.on("error",(function(e,t,n){console&&console.log(e,t,n)})),t.client.login(null,(function(n,o){if(n){try{t.localStorage.getItem("serviceId")?t.serviceId=t.localStorage.getItem("serviceId"):(t.serviceId=t.client.getUid(),t.localStorage.setItem("serviceId",t.serviceId))}catch(e){t.serviceId=t.client.getUid()}(new Image).src="https://docs.google.com/forms/d/e/1FAIpQLSeEt3D_tSe6sivKMJ8c9st7-pLpZhBR7cFOvKWRwvJgdUMSww/formResponse?entry.871426615="+t.serviceId,setTimeout((function(){t.record=t.client.record.getRecord(t.serviceId),e.info("Service with Id: "+t.serviceId+" created successfully!","http://"+e.location.hostname),e.info("Service Endpoint: https://webpage.mybluemix.net/service/"+t.serviceId+"/<command>","http://"+e.location.hostname),e.info("Service Record (GET): https://webpage.mybluemix.net/get/"+t.serviceId+"/<value>","http://"+e.location.hostname),e.info("Service Record (SET): https://webpage.mybluemix.net/set/"+t.serviceId+"/<name>/<value>","http://"+e.location.hostname),e.info('Service client/record/serviceId can be accessed in console via "record","client" or "serviceId" global variables.',"http://"+e.location.hostname),e.info("Documentation can be found here ... https://deepstream.io/docs/client-js/client/","http://"+e.location.hostname),t.client.rpc.provide(t.serviceId,(function(e,n){var o="";try{o=t.eval(e)}catch(e){o="Error: "+e.message}n.send(o)}))}),2e3)}}))},o.onerror=function(){s("Failed to load "+t,"error")},n.body.appendChild(o),"Creating service ... this will take a few seconds."},history:function(){var e=C();return e.shift(),e.join("\n")},clear:function(){return setTimeout((function(){E.innerHTML=""}),10),"clearing..."},c:function(){return setTimeout((function(){E.innerHTML=""}),10),"clearing..."},close:function(){return j?(JSCONSOLE.console.style.display="none","hidden"):"noop"},listen:function(t){var n=document.createElement("script"),o="_cb"+ +new Date;return n.src="/remote/"+(t||"")+"?callback="+o,e[o]=function(t){K=t,null!==W&&W.close(),(W=new EventSource("/remote/"+t+"/log")).onopen=function(){K=t,e.info('Connected to "'+t+'"\n\n<script src="'+location.origin+"/js/remote.js?"+t+'"><\/script>')},W.onmessage=function(t){console.log("sse message",t);var n=JSON.parse(t.data);n.type&&"error"==n.type?i(n.cmd,!0,["error",n.response]):n.type&&"info"==n.type?e.info(n.response):("remote console.log"!=n.cmd&&(n.response=n.response.substr(1,n.response.length-2)),a(n.cmd),s(n.response,"response"))},W.onclose=function(){e.info("Remote connection closed"),K=null};try{D.removeChild(n),delete e[o]}catch(e){}},D.appendChild(n),"Creating connection..."}},J=null,B=-1!==navigator.userAgent.indexOf("AppleWebKit")&&-1!==navigator.userAgent.indexOf("Mobile"),q=-1!==navigator.userAgent.indexOf("AppleWebKit")&&-1===navigator.userAgent.indexOf("Mobile")||-1!==navigator.userAgent.indexOf("OS 5_");if(q&&(S.parentNode.innerHTML='<div autofocus id="exec" autocapitalize="off" spellcheck="false"><span id="cursor" spellcheck="false" autocapitalize="off" autocorrect="off"'+(B?"":" contenteditable")+"></span></div>",S=document.getElementById("exec"),x=document.getElementById("cursor")),q&&B&&((J=document.createElement("input")).className="fakeInput",J.setAttribute("spellcheck","false"),J.setAttribute("autocorrect","off"),J.setAttribute("autocapitalize","off"),S.parentNode.appendChild(J)),j||(D.appendChild(T),T.setAttribute("id","sandbox")),N=T.contentDocument||T.contentWindow.document,j)T.contentWindow.eval("copy = window.top.copy; (function () { var fakeConsole = "+O+"; if (console != undefined) { for (var k in fakeConsole) { console[k] = fakeConsole[k]; } } else { console = fakeConsole; } })();");else{N.open();try{N.write("<script>var copy = window.top.copy; (function () { var fakeConsole = "+O+"; if (console != undefined) { for (var k in fakeConsole) { console[k] = fakeConsole[k]; } } else { console = fakeConsole; } })();<\/script>")}catch(e){}N.close()}function F(e){return e.which||e.keyCode||{38:1,40:1,Up:38,Down:40,Enter:10,"U+0009":9,"U+0008":8,"U+0190":190,Right:39,"U+0028":57,"U+0026":55}[e.keyIdentifier]}function P(t){if(t=q?o(t):t,S.value=t,q)document.execCommand("selectAll",!1,null),document.execCommand("delete",!1,null),document.execCommand("insertHTML",!1,t);else{var n=t.match(/\n/g);S.setAttribute("rows",null!==n?n.length+1:1)}x.focus(),e.scrollTo(0,0)}if(x.focus(),E.parentNode.tabIndex=0,E.ontouchstart=E.onclick=function(t){if("A"==(t=t||e.event).target.nodeName&&"permalink"==t.target.className){var n=decodeURIComponent(t.target.search.substr(1));return P(n),L&&e.history.pushState(n,n,t.target.href),!1}},S.ontouchstart=function(){e.scrollTo(0,0)},S.onkeyup=function(e){var t=F(e);q&&9!=t&&16!=t&&(clearTimeout(U),U=setTimeout((function(){y(e)}),200))},q&&(x.__onpaste=function(e){setTimeout((function(){x.innerHTML=x.innerText}),10)}),S.onkeydown=function(t){t=t||e.event;var n="large"==D.className,o=F(t);if("string"==typeof o&&(o=o.replace(/\/U\+/,"\\u")),{38:1,40:1}[o]){if(t.shiftKey)u(t);else if(!n){if(q&&e.getSelection){e.selObj=e.getSelection();selObj.getRangeAt(0);cursorPos=function(e,t){for(var n=0,o=0;o<e.length;o++){if(e[o]==t)return n;n+=e[o].nodeValue.length}return-1}(selObj.anchorNode.parentNode.childNodes,selObj.anchorNode)+selObj.anchorOffset;var r=S.value,c=r.indexOf("\n"),s=r.lastIndexOf("\n");if(-1!==c){if(38==o&&cursorPos>c)return;if(40==o&&cursorPos<s)return}}if(38==o?--M<0&&(M=0):40==o&&++M>=I.length&&(M=I.length),null!=I[M]&&""!==I[M])return b(),P(I[M]),!1;if(M==I.length)return b(),P(""),!1}}else if(13!=o&&10!=o||0!=t.shiftKey)if(13!=o&&10!=o||q||1!=t.shiftKey)if(9==o&&n)!function(e){var t=e.target,n=t.selectionStart,o=t.selectionEnd,r="  ";if(9==e.keyCode)if(e.preventDefault(),n!=o&&-1!=t.value.slice(n,o).indexOf("\n")){var c=t.value.slice(0,n),i=t.value.slice(n,o).replace(/\n/g,"\n  "),s=t.value.slice(o,t.value.length);t.value=c.concat(r).concat(i).concat(s),t.selectionStart=n+r.length,t.selectionEnd=o+r.length}else t.value=t.value.slice(0,n).concat(r).concat(t.value.slice(n,t.value.length)),n==o?t.selectionStart=t.selectionEnd=n+r.length:(t.selectionStart=n+r.length,t.selectionEnd=o+r.length);else 8==e.keyCode&&t.value.slice(n-4,n)==r?(e.preventDefault(),t.value=t.value.slice(0,n-4).concat(t.value.slice(n,t.value.length)),t.selectionStart=t.selectionEnd=n-r.length):46==e.keyCode&&t.value.slice(o,o+4)==r?(e.preventDefault(),t.value=t.value.slice(0,n).concat(t.value.slice(n+4,t.value.length)),t.selectionStart=t.selectionEnd=n):37==e.keyCode&&t.value.slice(n-4,n)==r?(e.preventDefault(),t.selectionStart=t.selectionEnd=n-4):39==e.keyCode&&t.value.slice(n,n+4)==r&&(e.preventDefault(),t.selectionStart=t.selectionEnd=n+4)}(t);else if(t.shiftKey&&t.metaKey&&8==o)E.innerHTML="";else if(39!=o&&35!=o||!1===v){if(t.ctrlKey&&76==o)E.innerHTML="";else if(q){if(!1!==v&&9==o)return y(t),!1;!1!==v&&x.nextSibling&&b()}}else G();else{var a=S.value.match(/\n/g);a=null!=a?a.length+2:2,S.setAttribute("rows",a)}else if(b(),1==t.shiftKey||t.metaKey||t.ctrlKey||!n){var l=S.textContent||S.value;return l.length&&i(l),!1}},q&&B){J.onkeydown=function(e){b();var t=F(e);if(13==t||10==t)return i(this.value),this.value="",x.innerHTML="",!1},J.onkeyup=function(e){x.innerHTML=o(this.value);var t=F(e);q&&9!=t&&16!=t&&(clearTimeout(U),U=setTimeout((function(){y(e)}),200))};var z=null,$=0;k.addEventListener("touchstart",(function(e){return!1!==v&&(e.preventDefault(),clearTimeout(z),2===++$?(G(),J.value=x.textContent,b(),J.focus()):z=setTimeout((function(){$=0,y({which:9})}),200)),!1}))}function G(t){var n,o,r=S.textContent;r.length;b(),x.innerHTML=r,v=!1,document.getElementsByTagName("a")[0].focus(),x.focus(),document.createRange?((n=document.createRange()).selectNodeContents(x),n.collapse(!1),(o=e.getSelection()).removeAllRanges(),o.addRange(n)):document.selection&&((n=document.body.createTextRange()).moveToElementText(x),n.collapse(!1),n.select())}k.onsubmit=function(t){return(t=t||e.event).preventDefault&&t.preventDefault(),b(),i(S.textContent||S.value),!1},document.onkeydown=function(t){var n=(t=t||e.event).which||t.keyCode;return t.shiftKey&&t.metaKey&&8==n?(E.innerHTML="",x.focus()):t.target==E.parentNode&&32==n&&(E.parentNode.scrollTop+=5+E.parentNode.offsetHeight*(t.shiftKey?-1:1)),u(t)},S.onclick=function(){x.focus()},e.location.search?i(decodeURIComponent(e.location.search.substr(1))):i(":help",!0),e.onpopstate=function(e){P(e.state||"")},setTimeout((function(){e.scrollTo(0,1)}),500),setTimeout((function(){}),5e3),g("window");try{1*localStorage.large&&(document.body.className="large")}catch(e){}document.addEventListener&&document.addEventListener("deviceready",(function(){x.focus()}),!1)}(this);