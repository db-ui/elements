"use strict";(self.webpackChunkplayground_showcase=self.webpackChunkplayground_showcase||[]).push([[899],{6899:function(n,e,t){t.r(e),t.d(e,{github_version_switcher:function(){return h}});var c=t(5671),r=t(3144),a=t(5122),h=function(){function n(e){(0,c.Z)(this,n),(0,a.r)(this,e),this.defaultBranch="main",this.branches=[],this.currentBranch=this.defaultBranch}return(0,r.Z)(n,[{key:"componentWillLoad",value:function(){var n=this;fetch("https://api.github.com/repos/".concat(this.owner,"/").concat(this.repo,"/branches")).then((function(n){return n.json()})).then((function(e){n.branches=e.map((function(n){return n.name})).filter((function(n){return"gh-pages"!==n}));var t=window.location.href,c=n.branches.find((function(n){return t.includes(n)}));c&&(n.currentBranch=c)}))}},{key:"handleChange",value:function(n,e,t){e&&t&&(top.location="https://".concat(e,".github.io/").concat(t).concat(this.defaultBranch===n?"":"/review/".concat(n),"/index.html"))}},{key:"render",value:function(){var n,e=this;return(0,a.h)(a.H,null,(null===(n=this.branches)||void 0===n?void 0:n.length)>0&&(0,a.h)("db-select",{label:"Version",name:"Theme",onDbChange:function(n){return e.handleChange(n.target.value,e.owner,e.repo)}},this.branches.map((function(n,t){return(0,a.h)("option",{key:"".concat(n,"-").concat(t),value:n,selected:e.currentBranch===n},n)}))))}}]),n}()}}]);
//# sourceMappingURL=899.c7007520.chunk.js.map