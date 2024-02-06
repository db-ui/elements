"use strict";(self.webpackChunkangular_lts_showcase=self.webpackChunkangular_lts_showcase||[]).push([[429],{321:(pe,Pe,Re)=>{Re(242)},242:function(pe,Pe,Re){var de,De,Ie=this&&this.__assign||function(){return Ie=Object.assign||function(se){for(var Ee,ye=1,Be=arguments.length;ye<Be;ye++)for(var Oe in Ee=arguments[ye])Object.prototype.hasOwnProperty.call(Ee,Oe)&&(se[Oe]=Ee[Oe]);return se},Ie.apply(this,arguments)};de=function(){!function(e){var t,a=e.performance;function i(h){a&&a.mark&&a.mark(h)}function s(h,r){a&&a.measure&&a.measure(h,r)}i("Zone");var f=e.__Zone_symbol_prefix||"__zone_symbol__";function _(h){return f+h}var E=!0===e[_("forceDuplicateZoneCheck")];if(e.Zone){if(E||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}var b=function(){function h(r,n){this._parent=r,this._name=n?n.name||"unnamed":"<root>",this._properties=n&&n.properties||{},this._zoneDelegate=new m(this,this._parent&&this._parent._zoneDelegate,n)}return h.assertZonePatched=function(){if(e.Promise!==X.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(h,"root",{get:function(){for(var r=t.current;r.parent;)r=r.parent;return r},enumerable:!1,configurable:!0}),Object.defineProperty(h,"current",{get:function(){return K.zone},enumerable:!1,configurable:!0}),Object.defineProperty(h,"currentTask",{get:function(){return ne},enumerable:!1,configurable:!0}),h.__load_patch=function(r,n,o){if(void 0===o&&(o=!1),X.hasOwnProperty(r)){if(!o&&E)throw Error("Already loaded patch: "+r)}else if(!e["__Zone_disable_"+r]){var p="Zone:"+r;i(p),X[r]=n(e,t,ie),s(p,p)}},Object.defineProperty(h.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),h.prototype.get=function(r){var n=this.getZoneWith(r);if(n)return n._properties[r]},h.prototype.getZoneWith=function(r){for(var n=this;n;){if(n._properties.hasOwnProperty(r))return n;n=n._parent}return null},h.prototype.fork=function(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)},h.prototype.wrap=function(r,n){if("function"!=typeof r)throw new Error("Expecting function got: "+r);var o=this._zoneDelegate.intercept(this,r,n),p=this;return function(){return p.runGuarded(o,this,arguments,n)}},h.prototype.run=function(r,n,o,p){K={parent:K,zone:this};try{return this._zoneDelegate.invoke(this,r,n,o,p)}finally{K=K.parent}},h.prototype.runGuarded=function(r,n,o,p){void 0===n&&(n=null),K={parent:K,zone:this};try{try{return this._zoneDelegate.invoke(this,r,n,o,p)}catch(z){if(this._zoneDelegate.handleError(this,z))throw z}}finally{K=K.parent}},h.prototype.runTask=function(r,n,o){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||re).name+"; Execution: "+this.name+")");if(r.state!==F||r.type!==O&&r.type!==L){var p=r.state!=y;p&&r._transitionTo(y,B),r.runCount++;var z=ne;ne=r,K={parent:K,zone:this};try{r.type==L&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,n,o)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{r.state!==F&&r.state!==D&&(r.type==O||r.data&&r.data.isPeriodic?p&&r._transitionTo(B,y):(r.runCount=0,this._updateTaskCount(r,-1),p&&r._transitionTo(F,y,F))),K=K.parent,ne=z}}},h.prototype.scheduleTask=function(r){if(r.zone&&r.zone!==this)for(var n=this;n;){if(n===r.zone)throw Error("can not reschedule task to ".concat(this.name," which is descendants of the original zone ").concat(r.zone.name));n=n.parent}r._transitionTo(x,F);var o=[];r._zoneDelegates=o,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(p){throw r._transitionTo(D,x,F),this._zoneDelegate.handleError(this,p),p}return r._zoneDelegates===o&&this._updateTaskCount(r,1),r.state==x&&r._transitionTo(B,x),r},h.prototype.scheduleMicroTask=function(r,n,o,p){return this.scheduleTask(new w(R,r,n,o,p,void 0))},h.prototype.scheduleMacroTask=function(r,n,o,p,z){return this.scheduleTask(new w(L,r,n,o,p,z))},h.prototype.scheduleEventTask=function(r,n,o,p,z){return this.scheduleTask(new w(O,r,n,o,p,z))},h.prototype.cancelTask=function(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||re).name+"; Execution: "+this.name+")");if(r.state===B||r.state===y){r._transitionTo(W,B,y);try{this._zoneDelegate.cancelTask(this,r)}catch(n){throw r._transitionTo(D,W),this._zoneDelegate.handleError(this,n),n}return this._updateTaskCount(r,-1),r._transitionTo(F,W),r.runCount=0,r}},h.prototype._updateTaskCount=function(r,n){var o=r._zoneDelegates;-1==n&&(r._zoneDelegates=null);for(var p=0;p<o.length;p++)o[p]._updateTaskCount(r.type,n)},h}();(t=b).__symbol__=_;var V,g={name:"",onHasTask:function(h,r,n,o){return h.hasTask(n,o)},onScheduleTask:function(h,r,n,o){return h.scheduleTask(n,o)},onInvokeTask:function(h,r,n,o,p,z){return h.invokeTask(n,o,p,z)},onCancelTask:function(h,r,n,o){return h.cancelTask(n,o)}},m=function(){function h(r,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=r,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var p=o&&o.onHasTask;(p||n&&n._hasTaskZS)&&(this._hasTaskZS=p?o:g,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=r,o.onScheduleTask||(this._scheduleTaskZS=g,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=g,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=g,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}return h.prototype.fork=function(r,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,n):new b(r,n)},h.prototype.intercept=function(r,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,n,o):n},h.prototype.invoke=function(r,n,o,p,z){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,n,o,p,z):n.apply(o,p)},h.prototype.handleError=function(r,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,n)},h.prototype.scheduleTask=function(r,n){var o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),(o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,n))||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=R)throw new Error("Task is missing scheduleFn.");A(n)}return o},h.prototype.invokeTask=function(r,n,o,p){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,n,o,p):n.callback.apply(o,p)},h.prototype.cancelTask=function(r,n){var o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o},h.prototype.hasTask=function(r,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,n)}catch(o){this.handleError(r,o)}},h.prototype._updateTaskCount=function(r,n){var o=this._taskCounts,p=o[r],z=o[r]=p+n;if(z<0)throw new Error("More tasks executed then were scheduled.");0!=p&&0!=z||this.hasTask(this.zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:r})},h}(),w=function(){function h(r,n,o,p,z,u){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=n,this.data=p,this.scheduleFn=z,this.cancelFn=u,!o)throw new Error("callback is not defined");this.callback=o;var v=this;this.invoke=r===O&&p&&p.useG?h.invokeTask:function(){return h.invokeTask.call(e,v,this,arguments)}}return h.invokeTask=function(r,n,o){r||(r=this),ce++;try{return r.runCount++,r.zone.runTask(r,n,o)}finally{1==ce&&T(),ce--}},Object.defineProperty(h.prototype,"zone",{get:function(){return this._zone},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),h.prototype.cancelScheduleRequest=function(){this._transitionTo(F,x)},h.prototype._transitionTo=function(r,n,o){if(this._state!==n&&this._state!==o)throw new Error("".concat(this.type," '").concat(this.source,"': can not transition to '").concat(r,"', expecting state '").concat(n,"'").concat(o?" or '"+o+"'":"",", was '").concat(this._state,"'."));this._state=r,r==F&&(this._zoneDelegates=null)},h.prototype.toString=function(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)},h.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},h}(),S=_("setTimeout"),M=_("Promise"),G=_("then"),j=[],ae=!1;function Y(h){if(V||e[M]&&(V=e[M].resolve(0)),V){var r=V[G];r||(r=V.then),r.call(V,h)}else e[S](h,0)}function A(h){0===ce&&0===j.length&&Y(T),h&&j.push(h)}function T(){if(!ae){for(ae=!0;j.length;){var h=j;j=[];for(var r=0;r<h.length;r++){var n=h[r];try{n.zone.runTask(n,null,null)}catch(o){ie.onUnhandledError(o)}}}ie.microtaskDrainDone(),ae=!1}}var re={name:"NO ZONE"},F="notScheduled",x="scheduling",B="scheduled",y="running",W="canceling",D="unknown",R="microTask",L="macroTask",O="eventTask",X={},ie={symbol:_,currentZoneFrame:function(){return K},onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:A,showUncaughtError:function(){return!b[_("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:q,patchMethod:function(){return q},bindArguments:function(){return[]},patchThen:function(){return q},patchMacroTask:function(){return q},patchEventPrototype:function(){return q},isIEOrEdge:function(){return!1},getGlobalObjects:function(){},ObjectDefineProperty:function(){return q},ObjectGetOwnPropertyDescriptor:function(){},ObjectCreate:function(){},ArraySlice:function(){return[]},patchClass:function(){return q},wrapWithCurrentZone:function(){return q},filterProperties:function(){return[]},attachOriginToPatched:function(){return q},_redefineProperty:function(){return q},patchCallbacks:function(){return q},nativeScheduleMicroTask:Y},K={parent:null,zone:new b(null,null)},ne=null,ce=0;function q(){}s("Zone","Zone"),e.Zone=b}(typeof window<"u"&&window||typeof self<"u"&&self||global);var se=Object.getOwnPropertyDescriptor,Ee=Object.defineProperty,ye=Object.getPrototypeOf,Be=Object.create,Oe=Array.prototype.slice,Fe="addEventListener",Ge="removeEventListener",Ve=Zone.__symbol__(Fe),Ue=Zone.__symbol__(Ge),fe="true",le="false",Se=Zone.__symbol__("");function xe(e,t){return Zone.current.wrap(e,t)}function ze(e,t,a,i,s){return Zone.current.scheduleMacroTask(e,t,a,i,s)}var H=Zone.__symbol__,Me=typeof window<"u",ge=Me?window:void 0,$=Me&&ge||"object"==typeof self&&self||global,dr="removeAttribute";function We(e,t){for(var a=e.length-1;a>=0;a--)"function"==typeof e[a]&&(e[a]=xe(e[a],t+"_"+a));return e}function Je(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}var Qe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ne=!("nw"in $)&&typeof $.process<"u"&&"[object process]"==={}.toString.call($.process),Xe=!Ne&&!Qe&&!(!Me||!ge.HTMLElement),$e=typeof $.process<"u"&&"[object process]"==={}.toString.call($.process)&&!Qe&&!(!Me||!ge.HTMLElement),Le={},er=function(e){if(e=e||$.event){var t=Le[e.type];t||(t=Le[e.type]=H("ON_PROPERTY"+e.type));var s,a=this||e.target||$,i=a[t];return Xe&&a===ge&&"error"===e.type?!0===(s=i&&i.call(this,e.message,e.filename,e.lineno,e.colno,e.error))&&e.preventDefault():null!=(s=i&&i.apply(this,arguments))&&!s&&e.preventDefault(),s}};function rr(e,t,a){var i=se(e,t);if(!i&&a&&se(a,t)&&(i={enumerable:!0,configurable:!0}),i&&i.configurable){var f=H("on"+t+"patched");if(!e.hasOwnProperty(f)||!e[f]){delete i.writable,delete i.value;var _=i.get,E=i.set,b=t.slice(2),g=Le[b];g||(g=Le[b]=H("ON_PROPERTY"+b)),i.set=function(m){var w=this;!w&&e===$&&(w=$),w&&("function"==typeof w[g]&&w.removeEventListener(b,er),E&&E.call(w,null),w[g]=m,"function"==typeof m&&w.addEventListener(b,er,!1))},i.get=function(){var m=this;if(!m&&e===$&&(m=$),!m)return null;var w=m[g];if(w)return w;if(_){var S=_.call(this);if(S)return i.set.call(this,S),"function"==typeof m[dr]&&m.removeAttribute(t),S}return null},Ee(e,t,i),e[f]=!0}}}function tr(e,t,a){if(t)for(var i=0;i<t.length;i++)rr(e,"on"+t[i],a);else{var s=[];for(var f in e)"on"==f.slice(0,2)&&s.push(f);for(var _=0;_<s.length;_++)rr(e,s[_],a)}}var ue=H("originalInstance");function Ze(e){var t=$[e];if(t){$[H(e)]=t,$[e]=function(){var s=We(arguments,e);switch(s.length){case 0:this[ue]=new t;break;case 1:this[ue]=new t(s[0]);break;case 2:this[ue]=new t(s[0],s[1]);break;case 3:this[ue]=new t(s[0],s[1],s[2]);break;case 4:this[ue]=new t(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},ve($[e],t);var i,a=new t(function(){});for(i in a)"XMLHttpRequest"===e&&"responseBlob"===i||function(s){"function"==typeof a[s]?$[e].prototype[s]=function(){return this[ue][s].apply(this[ue],arguments)}:Ee($[e].prototype,s,{set:function(f){"function"==typeof f?(this[ue][s]=xe(f,e+"."+s),ve(this[ue][s],f)):this[ue][s]=f},get:function(){return this[ue][s]}})}(i);for(i in t)"prototype"!==i&&t.hasOwnProperty(i)&&($[e][i]=t[i])}}function he(e,t,a){for(var i=e;i&&!i.hasOwnProperty(t);)i=ye(i);!i&&e[t]&&(i=e);var s=H(t),f=null;if(i&&(!(f=i[s])||!i.hasOwnProperty(s))&&(f=i[s]=i[t],Je(i&&se(i,t)))){var E=a(f,s,t);i[t]=function(){return E(this,arguments)},ve(i[t],f)}return f}function Tr(e,t,a){var i=null;function s(f){var _=f.data;return _.args[_.cbIdx]=function(){f.invoke.apply(this,arguments)},i.apply(_.target,_.args),f}i=he(e,t,function(f){return function(_,E){var b=a(_,E);return b.cbIdx>=0&&"function"==typeof E[b.cbIdx]?ze(b.name,E[b.cbIdx],b,s):f.apply(_,E)}})}function ve(e,t){e[H("OriginalDelegate")]=t}var nr=!1,Ye=!1;function pr(){if(nr)return Ye;nr=!0;try{var e=ge.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ye=!0)}catch{}return Ye}Zone.__load_patch("ZoneAwarePromise",function(e,t,a){var i=Object.getOwnPropertyDescriptor,s=Object.defineProperty;var _=a.symbol,E=[],b=!0===e[_("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],g=_("Promise"),m=_("then"),w="__creationTrace__";a.onUnhandledError=function(u){if(a.showUncaughtError()){var v=u&&u.rejection;v?console.error("Unhandled Promise rejection:",v instanceof Error?v.message:v,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",v,v instanceof Error?v.stack:void 0):console.error(u)}},a.microtaskDrainDone=function(){for(var u=function(){var v=E.shift();try{v.zone.runGuarded(function(){throw v.throwOriginal?v.rejection:v})}catch(l){!function M(u){a.onUnhandledError(u);try{var v=t[S];"function"==typeof v&&v.call(this,u)}catch{}}(l)}};E.length;)u()};var S=_("unhandledPromiseRejectionHandler");function G(u){return u&&u.then}function j(u){return u}function ae(u){return r.reject(u)}var V=_("state"),Y=_("value"),A=_("finally"),T=_("parentPromiseValue"),re=_("parentPromiseState"),F="Promise.then",x=null,B=!0,y=!1,W=0;function D(u,v){return function(l){try{X(u,v,l)}catch(c){X(u,!1,c)}}}var R=function(){var u=!1;return function(l){return function(){u||(u=!0,l.apply(null,arguments))}}},L="Promise resolved with itself",O=_("currentTaskTrace");function X(u,v,l){var c=R();if(u===l)throw new TypeError(L);if(u[V]===x){var d=null;try{("object"==typeof l||"function"==typeof l)&&(d=l&&l.then)}catch(I){return c(function(){X(u,!1,I)})(),u}if(v!==y&&l instanceof r&&l.hasOwnProperty(V)&&l.hasOwnProperty(Y)&&l[V]!==x)K(l),X(u,l[V],l[Y]);else if(v!==y&&"function"==typeof d)try{d.call(l,c(D(u,v)),c(D(u,!1)))}catch(I){c(function(){X(u,!1,I)})()}else{u[V]=v;var P=u[Y];if(u[Y]=l,u[A]===A&&v===B&&(u[V]=u[re],u[Y]=u[T]),v===y&&l instanceof Error){var k=t.currentTask&&t.currentTask.data&&t.currentTask.data[w];k&&s(l,O,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(var Z=0;Z<P.length;)ne(u,P[Z++],P[Z++],P[Z++],P[Z++]);if(0==P.length&&v==y){u[V]=W;var C=l;try{throw new Error("Uncaught (in promise): "+function f(u){return u&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u)}(l)+(l&&l.stack?"\n"+l.stack:""))}catch(I){C=I}b&&(C.throwOriginal=!0),C.rejection=l,C.promise=u,C.zone=t.current,C.task=t.currentTask,E.push(C),a.scheduleMicroTask()}}}return u}var ie=_("rejectionHandledHandler");function K(u){if(u[V]===W){try{var v=t[ie];v&&"function"==typeof v&&v.call(this,{rejection:u[Y],promise:u})}catch{}u[V]=y;for(var l=0;l<E.length;l++)u===E[l].promise&&E.splice(l,1)}}function ne(u,v,l,c,d){K(u);var P=u[V],k=P?"function"==typeof c?c:j:"function"==typeof d?d:ae;v.scheduleMicroTask(F,function(){try{var Z=u[Y],C=!!l&&A===l[A];C&&(l[T]=Z,l[re]=P);var I=v.run(k,void 0,C&&k!==ae&&k!==j?[]:[Z]);X(l,!0,I)}catch(N){X(l,!1,N)}},l)}var q=function(){},h=e.AggregateError,r=function(){function u(v){var l=this;if(!(l instanceof u))throw new Error("Must be an instanceof Promise.");l[V]=x,l[Y]=[];try{var c=R();v&&v(c(D(l,B)),c(D(l,y)))}catch(d){X(l,!1,d)}}return u.toString=function(){return"function ZoneAwarePromise() { [native code] }"},u.resolve=function(v){return X(new this(null),B,v)},u.reject=function(v){return X(new this(null),y,v)},u.any=function(v){if(!v||"function"!=typeof v[Symbol.iterator])return Promise.reject(new h([],"All promises were rejected"));var l=[],c=0;try{for(var d=0,P=v;d<P.length;d++)c++,l.push(u.resolve(P[d]))}catch{return Promise.reject(new h([],"All promises were rejected"))}if(0===c)return Promise.reject(new h([],"All promises were rejected"));var Z=!1,C=[];return new u(function(I,N){for(var U=0;U<l.length;U++)l[U].then(function(te){Z||(Z=!0,I(te))},function(te){C.push(te),0==--c&&(Z=!0,N(new h(C,"All promises were rejected")))})})},u.race=function(v){var l,c,d=new this(function(N,U){l=N,c=U});function P(N){l(N)}function k(N){c(N)}for(var Z=0,C=v;Z<C.length;Z++){var I=C[Z];G(I)||(I=this.resolve(I)),I.then(P,k)}return d},u.all=function(v){return u.allWithCallback(v)},u.allSettled=function(v){return(this&&this.prototype instanceof u?this:u).allWithCallback(v,{thenCallback:function(c){return{status:"fulfilled",value:c}},errorCallback:function(c){return{status:"rejected",reason:c}}})},u.allWithCallback=function(v,l){for(var c,d,P=new this(function(Q,ee){c=Q,d=ee}),k=2,Z=0,C=[],I=function(Q){G(Q)||(Q=N.resolve(Q));var ee=Z;try{Q.then(function(J){C[ee]=l?l.thenCallback(J):J,0==--k&&c(C)},function(J){l?(C[ee]=l.errorCallback(J),0==--k&&c(C)):d(J)})}catch(J){d(J)}k++,Z++},N=this,U=0,te=v;U<te.length;U++)I(te[U]);return 0==(k-=2)&&c(C),P},Object.defineProperty(u.prototype,Symbol.toStringTag,{get:function(){return"Promise"},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,Symbol.species,{get:function(){return u},enumerable:!1,configurable:!0}),u.prototype.then=function(v,l){var c,d=null===(c=this.constructor)||void 0===c?void 0:c[Symbol.species];(!d||"function"!=typeof d)&&(d=this.constructor||u);var P=new d(q),k=t.current;return this[V]==x?this[Y].push(k,P,v,l):ne(this,k,P,v,l),P},u.prototype.catch=function(v){return this.then(null,v)},u.prototype.finally=function(v){var l,c=null===(l=this.constructor)||void 0===l?void 0:l[Symbol.species];(!c||"function"!=typeof c)&&(c=u);var d=new c(q);d[A]=A;var P=t.current;return this[V]==x?this[Y].push(P,d,v,v):ne(this,P,d,v,v),d},u}();r.resolve=r.resolve,r.reject=r.reject,r.race=r.race,r.all=r.all;var n=e[g]=e.Promise;e.Promise=r;var o=_("thenPatched");function p(u){var v=u.prototype,l=i(v,"then");if(!l||!1!==l.writable&&l.configurable){var c=v.then;v[m]=c,u.prototype.then=function(d,P){var k=this;return new r(function(C,I){c.call(k,C,I)}).then(d,P)},u[o]=!0}}return a.patchThen=p,n&&(p(n),he(e,"fetch",function(u){return function z(u){return function(v,l){var c=u.apply(v,l);if(c instanceof r)return c;var d=c.constructor;return d[o]||p(d),c}}(u)})),Promise[t.__symbol__("uncaughtPromiseErrors")]=E,r}),Zone.__load_patch("toString",function(e){var t=Function.prototype.toString,a=H("OriginalDelegate"),i=H("Promise"),s=H("Error"),f=function(){if("function"==typeof this){var g=this[a];if(g)return"function"==typeof g?t.call(g):Object.prototype.toString.call(g);if(this===Promise){var m=e[i];if(m)return t.call(m)}if(this===Error){var w=e[s];if(w)return t.call(w)}}return t.call(this)};f[a]=t,Function.prototype.toString=f;var _=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":_.call(this)}});var me=!1;if(typeof window<"u")try{var Ae=Object.defineProperty({},"passive",{get:function(){me=!0}});window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch{me=!1}var gr={useG:!0},oe={},or={},ar=new RegExp("^"+Se+"(\\w+)(true|false)$"),ir=H("propagationStopped");function ur(e,t){var a=(t?t(e):e)+le,i=(t?t(e):e)+fe,s=Se+a,f=Se+i;oe[e]={},oe[e][le]=s,oe[e][fe]=f}function mr(e,t,a,i){var s=i&&i.add||Fe,f=i&&i.rm||Ge,_=i&&i.listeners||"eventListeners",E=i&&i.rmAll||"removeAllListeners",b=H(s),g="."+s+":",m="prependListener",w="."+m+":",S=function(A,T,re){if(!A.isRemoved){var x,F=A.callback;"object"==typeof F&&F.handleEvent&&(A.callback=function(W){return F.handleEvent(W)},A.originalDelegate=F);try{A.invoke(A,T,[re])}catch(W){x=W}var B=A.options;return B&&"object"==typeof B&&B.once&&T[f].call(T,re.type,A.originalDelegate?A.originalDelegate:A.callback,B),x}};function M(A,T,re){if(T=T||e.event){var F=A||T.target||e,x=F[oe[T.type][re?fe:le]];if(x){var B=[];if(1===x.length)(y=S(x[0],F,T))&&B.push(y);else for(var W=x.slice(),D=0;D<W.length&&(!T||!0!==T[ir]);D++){var y;(y=S(W[D],F,T))&&B.push(y)}if(1===B.length)throw B[0];var R=function(L){var O=B[L];t.nativeScheduleMicroTask(function(){throw O})};for(D=0;D<B.length;D++)R(D)}}}var G=function(A){return M(this,A,!1)},j=function(A){return M(this,A,!0)};function ae(A,T){if(!A)return!1;var re=!0;T&&void 0!==T.useG&&(re=T.useG);var F=T&&T.vh,x=!0;T&&void 0!==T.chkDup&&(x=T.chkDup);var B=!1;T&&void 0!==T.rt&&(B=T.rt);for(var y=A;y&&!y.hasOwnProperty(s);)y=ye(y);if(!y&&A[s]&&(y=A),!y||y[b])return!1;var ie,W=T&&T.eventNameToString,D={},R=y[b]=y[s],L=y[H(f)]=y[f],O=y[H(_)]=y[_],X=y[H(E)]=y[E];T&&T.prepend&&(ie=y[H(T.prepend)]=y[T.prepend]);var n=re?function(c){if(!D.isExisting)return R.call(D.target,D.eventName,D.capture?j:G,D.options)}:function(c){return R.call(D.target,D.eventName,c.invoke,D.options)},o=re?function(c){if(!c.isRemoved){var d=oe[c.eventName],P=void 0;d&&(P=d[c.capture?fe:le]);var k=P&&c.target[P];if(k)for(var Z=0;Z<k.length;Z++)if(k[Z]===c){k.splice(Z,1),c.isRemoved=!0,0===k.length&&(c.allRemoved=!0,c.target[P]=null);break}}if(c.allRemoved)return L.call(c.target,c.eventName,c.capture?j:G,c.options)}:function(c){return L.call(c.target,c.eventName,c.invoke,c.options)},z=T&&T.diff?T.diff:function(c,d){var P=typeof d;return"function"===P&&c.callback===d||"object"===P&&c.originalDelegate===d},u=Zone[H("UNPATCHED_EVENTS")],v=e[H("PASSIVE_EVENTS")],l=function(c,d,P,k,Z,C){return void 0===Z&&(Z=!1),void 0===C&&(C=!1),function(){var I=this||e,N=arguments[0];T&&T.transferEventName&&(N=T.transferEventName(N));var U=arguments[1];if(!U)return c.apply(this,arguments);if(Ne&&"uncaughtException"===N)return c.apply(this,arguments);var te=!1;if("function"!=typeof U){if(!U.handleEvent)return c.apply(this,arguments);te=!0}if(!F||F(c,U,I,arguments)){var _e=me&&!!v&&-1!==v.indexOf(N),Q=function K(c,d){return!me&&"object"==typeof c&&c?!!c.capture:me&&d?"boolean"==typeof c?{capture:c,passive:!0}:c?"object"==typeof c&&!1!==c.passive?Ie(Ie({},c),{passive:!0}):c:{passive:!0}:c}(arguments[2],_e);if(u)for(var ee=0;ee<u.length;ee++)if(N===u[ee])return _e?c.call(I,N,U,Q):c.apply(this,arguments);var J=!!Q&&("boolean"==typeof Q||Q.capture),be=!(!Q||"object"!=typeof Q)&&Q.once,Zr=Zone.current,Ke=oe[N];Ke||(ur(N,W),Ke=oe[N]);var lr=Ke[J?fe:le],we=I[lr],hr=!1;if(we){if(hr=!0,x)for(ee=0;ee<we.length;ee++)if(z(we[ee],U))return}else we=I[lr]=[];var He,vr=I.constructor.name,_r=or[vr];_r&&(He=_r[N]),He||(He=vr+d+(W?W(N):N)),D.options=Q,be&&(D.options.once=!1),D.target=I,D.capture=J,D.eventName=N,D.isExisting=hr;var Ce=re?gr:void 0;Ce&&(Ce.taskData=D);var Te=Zr.scheduleEventTask(He,U,Ce,P,k);if(D.target=null,Ce&&(Ce.taskData=null),be&&(Q.once=!0),!me&&"boolean"==typeof Te.options||(Te.options=Q),Te.target=I,Te.capture=J,Te.eventName=N,te&&(Te.originalDelegate=U),C?we.unshift(Te):we.push(Te),Z)return I}}};return y[s]=l(R,g,n,o,B),ie&&(y[m]=l(ie,w,function(c){return ie.call(D.target,D.eventName,c.invoke,D.options)},o,B,!0)),y[f]=function(){var c=this||e,d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));var P=arguments[2],k=!!P&&("boolean"==typeof P||P.capture),Z=arguments[1];if(!Z)return L.apply(this,arguments);if(!F||F(L,Z,c,arguments)){var I,C=oe[d];C&&(I=C[k?fe:le]);var N=I&&c[I];if(N)for(var U=0;U<N.length;U++){var te=N[U];if(z(te,Z))return N.splice(U,1),te.isRemoved=!0,0===N.length&&(te.allRemoved=!0,c[I]=null,"string"==typeof d)&&(c[Se+"ON_PROPERTY"+d]=null),te.zone.cancelTask(te),B?c:void 0}return L.apply(this,arguments)}},y[_]=function(){var c=this||e,d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));for(var P=[],k=sr(c,W?W(d):d),Z=0;Z<k.length;Z++){var C=k[Z];P.push(C.originalDelegate?C.originalDelegate:C.callback)}return P},y[E]=function(){var c=this||e,d=arguments[0];if(d){T&&T.transferEventName&&(d=T.transferEventName(d));var N=oe[d];if(N){var _e=c[N[le]],Q=c[N[fe]];if(_e)for(var ee=_e.slice(),k=0;k<ee.length;k++)this[f].call(this,d,(J=ee[k]).originalDelegate?J.originalDelegate:J.callback,J.options);if(Q)for(ee=Q.slice(),k=0;k<ee.length;k++){var J;this[f].call(this,d,(J=ee[k]).originalDelegate?J.originalDelegate:J.callback,J.options)}}}else{var P=Object.keys(c);for(k=0;k<P.length;k++){var C=ar.exec(P[k]),I=C&&C[1];I&&"removeListener"!==I&&this[E].call(this,I)}this[E].call(this,"removeListener")}if(B)return this},ve(y[s],R),ve(y[f],L),X&&ve(y[E],X),O&&ve(y[_],O),!0}for(var V=[],Y=0;Y<a.length;Y++)V[Y]=ae(a[Y],i);return V}function sr(e,t){if(!t){var a=[];for(var i in e){var s=ar.exec(i),f=s&&s[1];if(f&&(!t||f===t)){var _=e[i];if(_)for(var E=0;E<_.length;E++)a.push(_[E])}}return a}var b=oe[t];b||(ur(t),b=oe[t]);var g=e[b[le]],m=e[b[fe]];return g?m?g.concat(m):g.slice():m?m.slice():[]}function kr(e,t){var a=e.Event;a&&a.prototype&&t.patchMethod(a.prototype,"stopImmediatePropagation",function(i){return function(s,f){s[ir]=!0,i&&i.apply(s,f)}})}function br(e,t,a,i,s){var f=Zone.__symbol__(i);if(!t[f]){var _=t[f]=t[i];t[i]=function(E,b,g){return b&&b.prototype&&s.forEach(function(m){var w="".concat(a,".").concat(i,"::")+m,S=b.prototype;try{if(S.hasOwnProperty(m)){var M=e.ObjectGetOwnPropertyDescriptor(S,m);M&&M.value?(M.value=e.wrapWithCurrentZone(M.value,w),e._redefineProperty(b.prototype,m,M)):S[m]&&(S[m]=e.wrapWithCurrentZone(S[m],w))}else S[m]&&(S[m]=e.wrapWithCurrentZone(S[m],w))}catch{}}),_.call(t,E,b,g)},e.attachOriginToPatched(t[i],_)}}function cr(e,t,a){if(!a||0===a.length)return t;var i=a.filter(function(f){return f.target===e});if(!i||0===i.length)return t;var s=i[0].ignoreProperties;return t.filter(function(f){return-1===s.indexOf(f)})}function fr(e,t,a,i){e&&tr(e,cr(e,t,a),i)}function qe(e){return Object.getOwnPropertyNames(e).filter(function(t){return t.startsWith("on")&&t.length>2}).map(function(t){return t.substring(2)})}function wr(e,t){if((!Ne||$e)&&!Zone[e.symbol("patchEvents")]){var a=t.__Zone_ignore_on_properties,i=[];if(Xe){var s=window;i=i.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);var f=function yr(){try{var e=ge.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:s,ignoreProperties:["error"]}]:[];fr(s,qe(s),a&&a.concat(f),ye(s))}i=i.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(var _=0;_<i.length;_++){var E=t[i[_]];E&&E.prototype&&fr(E.prototype,qe(E.prototype),a)}}}Zone.__load_patch("util",function(e,t,a){var i=qe(e);a.patchOnProperties=tr,a.patchMethod=he,a.bindArguments=We,a.patchMacroTask=Tr;var s=t.__symbol__("BLACK_LISTED_EVENTS"),f=t.__symbol__("UNPATCHED_EVENTS");e[f]&&(e[s]=e[f]),e[s]&&(t[s]=t[f]=e[s]),a.patchEventPrototype=kr,a.patchEventTarget=mr,a.isIEOrEdge=pr,a.ObjectDefineProperty=Ee,a.ObjectGetOwnPropertyDescriptor=se,a.ObjectCreate=Be,a.ArraySlice=Oe,a.patchClass=Ze,a.wrapWithCurrentZone=xe,a.filterProperties=cr,a.attachOriginToPatched=ve,a._redefineProperty=Object.defineProperty,a.patchCallbacks=br,a.getGlobalObjects=function(){return{globalSources:or,zoneSymbolEventNames:oe,eventNames:i,isBrowser:Xe,isMix:$e,isNode:Ne,TRUE_STR:fe,FALSE_STR:le,ZONE_SYMBOL_PREFIX:Se,ADD_EVENT_LISTENER_STR:Fe,REMOVE_EVENT_LISTENER_STR:Ge}}});var je=H("zoneTask");function ke(e,t,a,i){var s=null,f=null;a+=i;var _={};function E(g){var m=g.data;return m.args[0]=function(){return g.invoke.apply(this,arguments)},m.handleId=s.apply(e,m.args),g}function b(g){return f.call(e,g.data.handleId)}s=he(e,t+=i,function(g){return function(m,w){if("function"==typeof w[0]){var S={isPeriodic:"Interval"===i,delay:"Timeout"===i||"Interval"===i?w[1]||0:void 0,args:w},M=w[0];w[0]=function(){try{return M.apply(this,arguments)}finally{S.isPeriodic||("number"==typeof S.handleId?delete _[S.handleId]:S.handleId&&(S.handleId[je]=null))}};var G=ze(t,w[0],S,E,b);if(!G)return G;var j=G.data.handleId;return"number"==typeof j?_[j]=G:j&&(j[je]=G),j&&j.ref&&j.unref&&"function"==typeof j.ref&&"function"==typeof j.unref&&(G.ref=j.ref.bind(j),G.unref=j.unref.bind(j)),"number"==typeof j||j?j:G}return g.apply(e,w)}}),f=he(e,a,function(g){return function(m,w){var M,S=w[0];"number"==typeof S?M=_[S]:(M=S&&S[je])||(M=S),M&&"string"==typeof M.type?"notScheduled"!==M.state&&(M.cancelFn&&M.data.isPeriodic||0===M.runCount)&&("number"==typeof S?delete _[S]:S&&(S[je]=null),M.zone.cancelTask(M)):g.apply(e,w)}})}Zone.__load_patch("legacy",function(e){var t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("timers",function(e){var t="set",a="clear";ke(e,t,a,"Timeout"),ke(e,t,a,"Interval"),ke(e,t,a,"Immediate")}),Zone.__load_patch("requestAnimationFrame",function(e){ke(e,"request","cancel","AnimationFrame"),ke(e,"mozRequest","mozCancel","AnimationFrame"),ke(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(e,t){for(var a=["alert","prompt","confirm"],i=0;i<a.length;i++)he(e,a[i],function(f,_,E){return function(b,g){return t.current.run(f,e,g,E)}})}),Zone.__load_patch("EventTarget",function(e,t,a){(function Sr(e,t){t.patchEventPrototype(e,t)})(e,a),function Or(e,t){if(!Zone[t.symbol("patchEventTarget")]){for(var a=t.getGlobalObjects(),i=a.eventNames,s=a.zoneSymbolEventNames,f=a.TRUE_STR,_=a.FALSE_STR,E=a.ZONE_SYMBOL_PREFIX,b=0;b<i.length;b++){var g=i[b],S=E+(g+_),M=E+(g+f);s[g]={},s[g][_]=S,s[g][f]=M}var G=e.EventTarget;if(G&&G.prototype)return t.patchEventTarget(e,t,[G&&G.prototype]),!0}}(e,a);var i=e.XMLHttpRequestEventTarget;i&&i.prototype&&a.patchEventTarget(e,a,[i.prototype])}),Zone.__load_patch("MutationObserver",function(e,t,a){Ze("MutationObserver"),Ze("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",function(e,t,a){Ze("IntersectionObserver")}),Zone.__load_patch("FileReader",function(e,t,a){Ze("FileReader")}),Zone.__load_patch("on_property",function(e,t,a){wr(a,e)}),Zone.__load_patch("customElements",function(e,t,a){!function Rr(e,t){var a=t.getGlobalObjects();(a.isBrowser||a.isMix)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,a)}),Zone.__load_patch("XHR",function(e,t){!function b(g){var m=g.XMLHttpRequest;if(m){var w=m.prototype,M=w[Ve],G=w[Ue];if(!M){var j=g.XMLHttpRequestEventTarget;if(j){var ae=j.prototype;M=ae[Ve],G=ae[Ue]}}var V="readystatechange",Y="scheduled",F=he(w,"open",function(){return function(R,L){return R[i]=0==L[2],R[_]=L[1],F.apply(R,L)}}),B=H("fetchTaskAborting"),y=H("fetchTaskScheduling"),W=he(w,"send",function(){return function(R,L){if(!0===t.current[y]||R[i])return W.apply(R,L);var O={target:R,url:R[_],isPeriodic:!1,args:L,aborted:!1},X=ze("XMLHttpRequest.send",T,O,A,re);R&&!0===R[E]&&!O.aborted&&X.state===Y&&X.invoke()}}),D=he(w,"abort",function(){return function(R,L){var O=function S(R){return R[a]}(R);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===t.current[B])return D.apply(R,L)}})}function A(R){var L=R.data,O=L.target;O[f]=!1,O[E]=!1;var X=O[s];M||(M=O[Ve],G=O[Ue]),X&&G.call(O,V,X);var ie=O[s]=function(){if(O.readyState===O.DONE)if(!L.aborted&&O[f]&&R.state===Y){var ne=O[t.__symbol__("loadfalse")];if(0!==O.status&&ne&&ne.length>0){var ce=R.invoke;R.invoke=function(){for(var q=O[t.__symbol__("loadfalse")],h=0;h<q.length;h++)q[h]===R&&q.splice(h,1);!L.aborted&&R.state===Y&&ce.call(R)},ne.push(R)}else R.invoke()}else!L.aborted&&!1===O[f]&&(O[E]=!0)};return M.call(O,V,ie),O[a]||(O[a]=R),W.apply(O,L.args),O[f]=!0,R}function T(){}function re(R){var L=R.data;return L.aborted=!0,D.apply(L.target,L.args)}}(e);var a=H("xhrTask"),i=H("xhrSync"),s=H("xhrListener"),f=H("xhrScheduled"),_=H("xhrURL"),E=H("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",function(e){e.navigator&&e.navigator.geolocation&&function Er(e,t){for(var a=e.constructor.name,i=function(f){var g,m,_=t[f],E=e[_];if(E){if(!Je(se(e,_)))return"continue";e[_]=(m=function(){return g.apply(this,We(arguments,a+"."+_))},ve(m,g=E),m)}},s=0;s<t.length;s++)i(s)}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(e,t){function a(i){return function(s){sr(e,i).forEach(function(_){var E=e.PromiseRejectionEvent;if(E){var b=new E(i,{promise:s.promise,reason:s.rejection});_.invoke(b)}})}}e.PromiseRejectionEvent&&(t[H("unhandledPromiseRejectionHandler")]=a("unhandledrejection"),t[H("rejectionHandledHandler")]=a("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",function(e,t,a){!function Pr(e,t){t.patchMethod(e,"queueMicrotask",function(a){return function(i,s){Zone.current.scheduleMicroTask("queueMicrotask",s[0])}})}(e,a)})},void 0!==(De=de.call(Pe,Re,Pe,pe))&&(pe.exports=De)}},pe=>{pe(pe.s=321)}]);