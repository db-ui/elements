"use strict";(self.webpackChunkreact_showcase=self.webpackChunkreact_showcase||[]).push([[899],{6899:function(e,t,n){n.r(t),n.d(t,{github_version_switcher:function(){return h}});var r=n(4165),a=n(5861),s=n(5671),c=n(3144),i=n(8876),h=function(){function e(t){var n=this;(0,s.Z)(this,e),(0,i.r)(this,t),this._defaultBranch="latest",this.stripString=function(e){return e.replace(/[^a-zA-Z0-9-]/g,"")},this.fetchFromGitHubApi=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.setCurrentBranch=function(e){var t=window.location.href,r=e.find((function(e){return t.includes(e)}));r&&(n.currentBranch=r)},this.setBranches=function(e){var t=e.map((function(e){return e.name})).filter((function(e){return"gh-pages"!==e&&!e.includes("dependabot")}));t.forEach((function(e){var t=n.groups.find((function(t){return e.startsWith(t.prefix)}));t?t.branches.push(e):n.groups.at(-1).branches.push(e)})),n.setCurrentBranch(t)},this.setTags=function(e){var t=e.map((function(e){return e.name}));t.forEach((function(e){n.groups[0].branches.push(e)})),n.setCurrentBranch(t)},this.owner=void 0,this.repo=void 0,this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.cleanOwner=void 0,this.cleanRepo=void 0}return(0,c.Z)(e,[{key:"defaultBranch",get:function(){return this._defaultBranch},set:function(e){this._defaultBranch=e}},{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.stripString(this.owner),this.cleanOwner=t,n=this.stripString(this.repo),this.cleanRepo=n,e.next=6,this.fetchFromGitHubApi("https://api.github.com/repos/".concat(t,"/").concat(n,"/branches"));case 6:return a=e.sent,this.setBranches(a),e.next=10,this.fetchFromGitHubApi("https://api.github.com/repos/".concat(t,"/").concat(n,"/tags"));case 10:s=e.sent,this.setTags(s);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t,n){if(t&&n){var r=top.location.href.split("?"),a=r[r.length-1],s=3===e.split(".").length&&e.startsWith("v");top.location="https://".concat(t,".github.io/").concat(n).concat(this._defaultBranch===e?"":"".concat(s?"/version":"/review","/").concat(e),"/?").concat(a)}}},{key:"render",value:function(){var e,t=this;return(0,i.h)(i.H,null,(null===(e=this.groups)||void 0===e?void 0:e.length)>0&&(0,i.h)("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:function(e){return t.handleChange(e.target.value,t.cleanOwner,t.cleanRepo)}},(0,i.h)("option",{value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter((function(e){var t;return(null===(t=e.branches)||void 0===t?void 0:t.length)>0})).map((function(e){return(0,i.h)("optgroup",{key:e.name,label:e.name},e.branches.map((function(n,r){return(0,i.h)("option",{key:"".concat(e.name,"-").concat(n,"-").concat(r),value:n,selected:t.currentBranch===n},n)})))}))))}}]),e}();h.style=".gh-version-switcher select{max-width:196px}"}}]);
//# sourceMappingURL=899.2124f06c.chunk.js.map