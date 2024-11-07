import{h,H as d,r as v}from"./index-DflUlHNe.js";var p=function(c,i,t,r){function n(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function u(s){try{a(r.next(s))}catch(l){o(l)}}function f(s){try{a(r.throw(s))}catch(l){o(l)}}function a(s){s.done?e(s.value):n(s.value).then(u,f)}a((r=r.apply(c,i||[])).next())})},b=function(c,i){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},r,n,e,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(a){return function(s){return f([a,s])}}function f(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(t=0)),t;)try{if(r=1,n&&(e=a[0]&2?n.return:a[0]?n.throw||((e=n.return)&&e.call(n),0):n.next)&&!(e=e.call(n,a[1])).done)return e;switch(n=0,e&&(a=[a[0]&2,e.value]),a[0]){case 0:case 1:e=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,n=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!e||a[1]>e[0]&&a[1]<e[3])){t.label=a[1];break}if(a[0]===6&&t.label<e[1]){t.label=e[1],e=a;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(a);break}e[2]&&t.ops.pop(),t.trys.pop();continue}a=i.call(c,t)}catch(s){a=[6,s],n=0}finally{r=e=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},g=".gh-version-switcher select{max-width:196px}",m=g,w=function(){function c(i){var t=this;v(this,i),this._defaultBranch="latest",this.stripString=function(r){return r.replace(/[^a-zA-Z0-9-]/g,"")},this.fetchFromGitHubApi=function(r){return p(t,void 0,void 0,function(){var n;return b(this,function(e){switch(e.label){case 0:return[4,fetch(r)];case 1:return n=e.sent(),[4,n.json()];case 2:return[2,e.sent()]}})})},this.setCurrentBranch=function(r){var n=window.location.href,e=r.find(function(o){return n.includes(o)});e&&(t.currentBranch=e)},this.setBranches=function(r){var n=r.map(function(e){return e.name}).filter(function(e){return e!=="gh-pages"&&!e.includes("dependabot")});n.forEach(function(e){var o=t.groups.find(function(u){return e.startsWith(u.prefix)});o?o.branches.push(e):t.groups.at(-1).branches.push(e)}),t.setCurrentBranch(n)},this.setTags=function(r){var n=r.map(function(e){return e.name});n.forEach(function(e){t.groups[0].branches.push(e)}),t.setCurrentBranch(n)},this.owner=void 0,this.repo=void 0,this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.cleanOwner=void 0,this.cleanRepo=void 0}return Object.defineProperty(c.prototype,"defaultBranch",{get:function(){return this._defaultBranch},set:function(i){this._defaultBranch=i},enumerable:!1,configurable:!0}),c.prototype.componentWillLoad=function(){return p(this,void 0,void 0,function(){var i,t,r,n;return b(this,function(e){switch(e.label){case 0:return i=this.stripString(this.owner),this.cleanOwner=i,t=this.stripString(this.repo),this.cleanRepo=t,[4,this.fetchFromGitHubApi("https://api.github.com/repos/".concat(i,"/").concat(t,"/branches"))];case 1:return r=e.sent(),this.setBranches(r),[4,this.fetchFromGitHubApi("https://api.github.com/repos/".concat(i,"/").concat(t,"/tags"))];case 2:return n=e.sent(),this.setTags(n),[2]}})})},c.prototype.handleChange=function(i,t,r){if(t&&r){var n=top.location.href,e=n.split("?"),o=e[e.length-1],u=i.split(".").length===3&&i.startsWith("v");top.location="https://".concat(t,".github.io/").concat(r).concat(this._defaultBranch===i?"":"".concat(u?"/version":"/review","/").concat(i),"/?").concat(o)}},c.prototype.render=function(){var i=this,t;return h(d,{key:"66a2543e72839abc7f67cb93aecc3a6cd0fbac1e"},((t=this.groups)===null||t===void 0?void 0:t.length)>0&&h("db-select",{key:"0069b07f3c022517f0037fbb3af6a7d1bb6ca8c2",class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:function(r){return i.handleChange(r.target.value,i.cleanOwner,i.cleanRepo)}},h("option",{key:"cd968ac0508b919a08ee39108366e02f124a7830",value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter(function(r){var n;return((n=r.branches)===null||n===void 0?void 0:n.length)>0}).map(function(r){return h("optgroup",{key:r.name,label:r.name},r.branches.map(function(n,e){return h("option",{key:"".concat(r.name,"-").concat(n,"-").concat(e),value:n,selected:i.currentBranch===n},n)}))})))},c}();w.style=m;export{w as github_version_switcher};
