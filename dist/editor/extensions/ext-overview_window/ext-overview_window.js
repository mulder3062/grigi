var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e){var t={exports:{}};return e(t,t.exports),t.exports}var check=function(e){return e&&e.Math==Math&&e},t=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof e&&e)||function(){return this}()||Function("return this")(),fails=function(e){try{return!!e()}catch(e){return!0}},r=!fails((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i={f:o&&!n.call({1:2},1)?function propertyIsEnumerable(e){var t=o(this,e);return!!t&&t.enumerable}:n},createPropertyDescriptor=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},a={}.toString,classofRaw=function(e){return a.call(e).slice(8,-1)},u="".split,c=fails((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==classofRaw(e)?u.call(e,""):Object(e)}:Object,requireObjectCoercible=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},toIndexedObject=function(e){return c(requireObjectCoercible(e))},isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},toPrimitive=function(e,t){if(!isObject(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!isObject(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!isObject(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!isObject(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},f={}.hasOwnProperty,has$1=function(e,t){return f.call(e,t)},s=t.document,l=isObject(s)&&isObject(s.createElement),documentCreateElement=function(e){return l?s.createElement(e):{}},p=!r&&!fails((function(){return 7!=Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a})),v=Object.getOwnPropertyDescriptor,w={f:r?v:function getOwnPropertyDescriptor(e,t){if(e=toIndexedObject(e),t=toPrimitive(t,!0),p)try{return v(e,t)}catch(e){}if(has$1(e,t))return createPropertyDescriptor(!i.f.call(e,t),e[t])}},anObject=function(e){if(!isObject(e))throw TypeError(String(e)+" is not an object");return e},d=Object.defineProperty,h={f:r?d:function defineProperty(e,t,r){if(anObject(e),t=toPrimitive(t,!0),anObject(r),p)try{return d(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},g=r?function(e,t,r){return h.f(e,t,createPropertyDescriptor(1,r))}:function(e,t,r){return e[t]=r,e},setGlobal=function(e,r){try{g(t,e,r)}catch(n){t[e]=r}return r},y=t["__core-js_shared__"]||setGlobal("__core-js_shared__",{}),m=Function.toString;"function"!=typeof y.inspectSource&&(y.inspectSource=function(e){return m.call(e)});var b,_,x,O=y.inspectSource,N=t.WeakMap,I="function"==typeof N&&/native code/.test(O(N)),E=createCommonjsModule((function(e){(e.exports=function(e,t){return y[e]||(y[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),S=0,j=Math.random(),M=E("keys"),sharedKey=function(e){return M[e]||(M[e]=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++S+j).toString(36)}(e))},F={},k=t.WeakMap;if(I){var P=y.state||(y.state=new k),T=P.get,A=P.has,V=P.set;b=function(e,t){return t.facade=e,V.call(P,e,t),t},_=function(e){return T.call(P,e)||{}},x=function(e){return A.call(P,e)}}else{var L=sharedKey("state");F[L]=!0,b=function(e,t){return t.facade=e,g(e,L,t),t},_=function(e){return has$1(e,L)?e[L]:{}},x=function(e){return has$1(e,L)}}var C,D,B={set:b,get:_,has:x,enforce:function(e){return x(e)?_(e):b(e,{})},getterFor:function(e){return function(t){var r;if(!isObject(t)||(r=_(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}},W=createCommonjsModule((function(e){var r=B.get,n=B.enforce,o=String(String).split("String");(e.exports=function(e,r,i,a){var u,c=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,s=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof r||has$1(i,"name")||g(i,"name",r),(u=n(i)).source||(u.source=o.join("string"==typeof r?r:""))),e!==t?(c?!s&&e[r]&&(f=!0):delete e[r],f?e[r]=i:g(e,r,i)):f?e[r]=i:setGlobal(r,i)})(Function.prototype,"toString",(function toString(){return"function"==typeof this&&r(this).source||O(this)}))})),X=t,aFunction=function(e){return"function"==typeof e?e:void 0},getBuiltIn=function(e,r){return arguments.length<2?aFunction(X[e])||aFunction(t[e]):X[e]&&X[e][r]||t[e]&&t[e][r]},R=Math.ceil,Y=Math.floor,toInteger=function(e){return isNaN(e=+e)?0:(e>0?Y:R)(e)},z=Math.min,G=Math.max,H=Math.min,createMethod$1=function(e){return function(t,r,n){var o,i,a=toIndexedObject(t),u=(o=a.length)>0?z(toInteger(o),9007199254740991):0,c=function(e,t){var r=toInteger(e);return r<0?G(r+t,0):H(r,t)}(n,u);if(e&&r!=r){for(;u>c;)if((i=a[c++])!=i)return!0}else for(;u>c;c++)if((e||c in a)&&a[c]===r)return e||c||0;return!e&&-1}},q={includes:createMethod$1(!0),indexOf:createMethod$1(!1)},U=q.indexOf,objectKeysInternal=function(e,t){var r,n=toIndexedObject(e),o=0,i=[];for(r in n)!has$1(F,r)&&has$1(n,r)&&i.push(r);for(;t.length>o;)has$1(n,r=t[o++])&&(~U(i,r)||i.push(r));return i},K=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],$=K.concat("length","prototype"),J={f:Object.getOwnPropertyNames||function getOwnPropertyNames(e){return objectKeysInternal(e,$)}},Q={f:Object.getOwnPropertySymbols},Z=getBuiltIn("Reflect","ownKeys")||function ownKeys(e){var t=J.f(anObject(e)),r=Q.f;return r?t.concat(r(e)):t},copyConstructorProperties=function(e,t){for(var r=Z(t),n=h.f,o=w.f,i=0;i<r.length;i++){var a=r[i];has$1(e,a)||n(e,a,o(t,a))}},ee=/#|\.prototype\./,isForced=function(e,t){var r=re[te(e)];return r==oe||r!=ne&&("function"==typeof t?fails(t):!!t)},te=isForced.normalize=function(e){return String(e).replace(ee,".").toLowerCase()},re=isForced.data={},ne=isForced.NATIVE="N",oe=isForced.POLYFILL="P",ie=isForced,ae=w.f,_export=function(e,r){var n,o,i,a,u,c=e.target,f=e.global,s=e.stat;if(n=f?t:s?t[c]||setGlobal(c,{}):(t[c]||{}).prototype)for(o in r){if(a=r[o],i=e.noTargetGet?(u=ae(n,o))&&u.value:n[o],!ie(f?o:c+(s?".":"#")+o,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;copyConstructorProperties(a,i)}(e.sham||i&&i.sham)&&g(a,"sham",!0),W(n,o,a,e)}},ue=q.indexOf,ce=[].indexOf,fe=!!ce&&1/[1].indexOf(1,-0)<0,se=!!(D=[]["indexOf"])&&fails((function(){D.call(null,C||function(){throw 1},1)}));_export({target:"Array",proto:!0,forced:fe||!se},{indexOf:function indexOf(e){return fe?ce.apply(this,arguments)||0:ue(this,e,arguments.length>1?arguments[1]:void 0)}});var le="\t\n\v\f\r                　\u2028\u2029\ufeff",pe="["+le+"]",ve=RegExp("^"+pe+pe+"*"),we=RegExp(pe+pe+"*$"),createMethod=function(e){return function(t){var r=String(requireObjectCoercible(t));return 1&e&&(r=r.replace(ve,"")),2&e&&(r=r.replace(we,"")),r}},de={start:createMethod(1),end:createMethod(2),trim:createMethod(3)},he=de.trim,ge=t.parseInt,ye=/^[+-]?0[Xx]/,me=8!==ge(le+"08")||22!==ge(le+"0x16")?function parseInt(e,t){var r=he(String(e));return ge(r,t>>>0||(ye.test(r)?16:10))}:ge;_export({target:"Number",stat:!0,forced:Number.parseInt!=me},{parseInt:me});var be,_e=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function setPrototypeOf(r,n){return anObject(r),function(e){if(!isObject(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(n),t?e.call(r,n):r.__proto__=n,r}}():void 0),inheritIfRequired=function(e,t,r){var n,o;return _e&&"function"==typeof(n=t.constructor)&&n!==r&&isObject(o=n.prototype)&&o!==r.prototype&&_e(e,o),e},xe=Object.keys||function keys(e){return objectKeysInternal(e,K)},Oe=r?Object.defineProperties:function defineProperties(e,t){anObject(e);for(var r,n=xe(t),o=n.length,i=0;o>i;)h.f(e,r=n[i++],t[r]);return e},Ne=getBuiltIn("document","documentElement"),Ie=sharedKey("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(e){return"<script>"+e+"<\/script>"},NullProtoObject=function(){try{be=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;NullProtoObject=be?function(e){e.write(scriptTag("")),e.close();var t=e.parentWindow.Object;return e=null,t}(be):((t=documentCreateElement("iframe")).style.display="none",Ne.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(scriptTag("document.F=Object")),e.close(),e.F);for(var r=K.length;r--;)delete NullProtoObject.prototype[K[r]];return NullProtoObject()};F[Ie]=!0;var Ee=Object.create||function create(e,t){var r;return null!==e?(EmptyConstructor.prototype=anObject(e),r=new EmptyConstructor,EmptyConstructor.prototype=null,r[Ie]=e):r=NullProtoObject(),void 0===t?r:Oe(r,t)},Se=J.f,je=w.f,Me=h.f,Fe=de.trim,ke=t.Number,Pe=ke.prototype,Te="Number"==classofRaw(Ee(Pe)),toNumber=function(e){var t,r,n,o,i,a,u,c,f=toPrimitive(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=Fe(f)).charCodeAt(0))||45===t){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(a=(i=f.slice(2)).length,u=0;u<a;u++)if((c=i.charCodeAt(u))<48||c>o)return NaN;return parseInt(i,n)}return+f};if(ie("Number",!ke(" 0o1")||!ke("0b1")||ke("+0x1"))){for(var Ae,Ve=function Number(e){var t=arguments.length<1?0:e,r=this;return r instanceof Ve&&(Te?fails((function(){Pe.valueOf.call(r)})):"Number"!=classofRaw(r))?inheritIfRequired(new ke(toNumber(t)),r,Ve):toNumber(t)},Le=r?Se(ke):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),Ce=0;Le.length>Ce;Ce++)has$1(ke,Ae=Le[Ce])&&!has$1(Ve,Ae)&&Me(Ve,Ae,je(ke,Ae));Ve.prototype=Pe,Pe.constructor=Ve,W(t,"Number",Ve)}var De=de.trim,Be=t.parseFloat,We=1/Be(le+"-0")!=-1/0?function parseFloat(e){var t=De(String(e)),r=Be(t);return 0===r&&"-"==t.charAt(0)?-0:r}:Be;_export({target:"Number",stat:!0,forced:Number.parseFloat!=We},{parseFloat:We}),_export({global:!0,forced:parseInt!=me},{parseInt:me});var Xe=!1,Re=[],Ye=void 0!==window.ontouchstart,ze={name:"overview_window",init:function init(e){var t=e.$,r=e.isChrome,n={};if(r()){var o=navigator.userAgent.indexOf("Chrome/")+7;if(Number.parseInt(navigator.userAgent.substring(o))<49)return}t("#sidepanels").append('<div id="overview_window_content_pane" style="width:100%; word-wrap:break-word;  display:inline-block; margin-top:20px;"><div id="overview_window_content" style="position:relative; left:12px; top:0px;"><div style="background-color:#A0A0A0; display:inline-block; overflow:visible;"><svg id="overviewMiniView" width="150" height="100" x="0" y="0" viewBox="0 0 4800 3600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use x="0" y="0" xlink:href="#svgroot"> </use></svg><div id="overview_window_view_box" style="min-width:50px; min-height:50px; position:absolute; top:30px; left:30px; z-index:5; background-color:rgba(255,0,102,0.3);"></div></div></div></div>');var i=function updateViewBox(){var e=Number.parseFloat(t("#workarea").css("height")),r=Number.parseFloat(t("#workarea").css("width")),n=t("#workarea").scrollLeft(),o=t("#workarea").scrollTop(),i=Number.parseFloat(t("#svgcanvas").css("width")),a=Number.parseFloat(t("#svgcanvas").css("height")),u=t("#overviewMiniView").attr("width"),c=t("#overviewMiniView").attr("height"),f=n/i*u,s=o/a*c,l=r/i*u,p=e/a*c;t("#overview_window_view_box").css("min-width",l+"px"),t("#overview_window_view_box").css("min-height",p+"px"),t("#overview_window_view_box").css("top",s+"px"),t("#overview_window_view_box").css("left",f+"px")};t("#workarea").scroll((function(){n.viewBoxDragging||i()})),t("#workarea").resize(i),i();var a=function updateViewDimensions(){var e=t("#svgroot").attr("width"),r=t("#svgroot").attr("height"),n=r/e*t("#overviewMiniView").attr("width");t("#overviewMiniView").attr("viewBox","640 480 "+e+" "+r),t("#overviewMiniView").attr("height",n),i()};a(),n.viewBoxDragging=!1;var u=function updateViewPortFromViewBox(){var e=Number.parseFloat(t("#svgcanvas").css("width")),r=Number.parseFloat(t("#svgcanvas").css("height")),n=t("#overviewMiniView").attr("width"),o=t("#overviewMiniView").attr("height"),i=Number.parseFloat(t("#overview_window_view_box").css("left"))/n*e,a=Number.parseFloat(t("#overview_window_view_box").css("top"))/o*r;t("#workarea").scrollLeft(i),t("#workarea").scrollTop(a)},c=document.querySelector("#overview_window_view_box");return function dragmove(e,t,r,n,o,i){Xe||document.addEventListener(Ye?"touchmove":"mousemove",(function(e){var t=e;e.touches&&(t=e.touches[0]);for(var r=0;r<Re.length;r++)Re[r](t.clientX,t.clientY)})),Xe=!0;var a=!1,u=!1,c=0,f=0,s=0,l=0;t.addEventListener(Ye?"touchstart":"mousedown",(function(t){if(t.stopPropagation(),t.preventDefault(),"false"!==e.dataset.dragEnabled){var r=t;t.touches&&(r=t.touches[0]),a=!0,c=e.offsetLeft-r.clientX,f=e.offsetTop-r.clientY}})),document.addEventListener(Ye?"touchend":"mouseup",(function(t){o&&u&&o(e,r,parseInt(e.style.left),parseInt(e.style.top)),a=!1,u=!1})),document.addEventListener(Ye?"touchmove":"mousemove",(function(t){i&&u&&i(e,parseInt(e.style.left),parseInt(e.style.top))})),Re.push((function move(t,r){if(a){if(u||(u=!0,n&&n(e,s,l)),s=t+c,l=r+f,"true"===e.dataset.dragBoundary){if(s<1||s>=window.innerWidth-e.offsetWidth)return;if(l<1||l>=window.innerHeight-e.offsetHeight)return}e.style.left=s+"px",e.style.top=l+"px"}}))}(c,c,document.querySelector("#overviewMiniView"),(function onStart(){n.viewBoxDragging=!0,u()}),(function onEnd(e,r,o,i){e.offsetLeft+e.offsetWidth>t(r).attr("width")?e.style.left=t(r).attr("width")-e.offsetWidth+"px":e.offsetLeft<0&&(e.style.left="0px"),e.offsetTop+e.offsetHeight>t(r).attr("height")?e.style.top=t(r).attr("height")-e.offsetHeight+"px":e.offsetTop<0&&(e.style.top="0px"),n.viewBoxDragging=!1,u()}),(function onDrag(){u()})),t("#overviewMiniView").click((function(e){var r=e.offsetX||e.originalEvent.layerX,n=e.offsetY||e.originalEvent.layerY,o=t("#overviewMiniView").attr("width"),i=t("#overviewMiniView").attr("height"),a=Number.parseFloat(t("#overview_window_view_box").css("min-width")),c=Number.parseFloat(t("#overview_window_view_box").css("min-height")),f=r-.5*a,s=n-.5*c;f<0&&(f=0),s<0&&(s=0),f+a>o&&(f=o-a),s+c>i&&(s=i-c),t("#overview_window_view_box").css("top",s+"px"),t("#overview_window_view_box").css("left",f+"px"),u()})),{name:"overview window",canvasUpdated:a,workareaResized:i}}};export default ze;
//# sourceMappingURL=ext-overview_window.js.map
