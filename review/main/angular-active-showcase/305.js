"use strict";(self.webpackChunkangular_active_showcase=self.webpackChunkangular_active_showcase||[]).push([[305],{305:(d,c,i)=>{i.r(c),i.d(c,{github_version_switcher:()=>f});var o=i(467),a=i(144);const f=(()=>{let u=class{constructor(s){(0,a.r)(this,s),this._defaultBranch="latest",this.stripString=t=>t.replace(/[^a-zA-Z0-9-]/g,""),this.fetchFromGitHubApi=function(){var t=(0,o.A)(function*(e){return yield(yield fetch(e)).json()});return function(e){return t.apply(this,arguments)}}(),this.setCurrentBranch=t=>{const e=window.location.href,n=t.find(r=>e.includes(r));n&&(this.currentBranch=n)},this.setBranches=t=>{const e=t.map(n=>n.name).filter(n=>"gh-pages"!==n&&!n.includes("dependabot"));e.forEach(n=>{const r=this.groups.find(h=>n.startsWith(h.prefix));r?r.branches.push(n):this.groups.at(-1).branches.push(n)}),this.setCurrentBranch(e)},this.setTags=t=>{const e=t.map(n=>n.name);e.forEach(n=>{this.groups[0].branches.push(n)}),this.setCurrentBranch(e)},this.owner=void 0,this.repo=void 0,this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.cleanOwner=void 0,this.cleanRepo=void 0}get defaultBranch(){return this._defaultBranch}set defaultBranch(s){this._defaultBranch=s}componentWillLoad(){var s=this;return(0,o.A)(function*(){const t=s.stripString(s.owner);s.cleanOwner=t;const e=s.stripString(s.repo);s.cleanRepo=e;const n=yield s.fetchFromGitHubApi(`https://api.github.com/repos/${t}/${e}/branches`);s.setBranches(n);const r=yield s.fetchFromGitHubApi(`https://api.github.com/repos/${t}/${e}/tags`);s.setTags(r)})()}handleChange(s,t,e){if(t&&e){const r=top.location.href.split("?"),h=r[r.length-1],p=3===s.split(".").length&&s.startsWith("v");top.location=`https://${t}.github.io/${e}${this._defaultBranch===s?"":`${p?"/version":"/review"}/${s}`}/?${h}`}}render(){var s;return(0,a.h)(a.H,{key:"66a2543e72839abc7f67cb93aecc3a6cd0fbac1e"},(null===(s=this.groups)||void 0===s?void 0:s.length)>0&&(0,a.h)("db-select",{key:"0069b07f3c022517f0037fbb3af6a7d1bb6ca8c2",class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:t=>this.handleChange(t.target.value,this.cleanOwner,this.cleanRepo)},(0,a.h)("option",{key:"cd968ac0508b919a08ee39108366e02f124a7830",value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter(t=>{var e;return(null===(e=t.branches)||void 0===e?void 0:e.length)>0}).map(t=>(0,a.h)("optgroup",{key:t.name,label:t.name},t.branches.map((e,n)=>(0,a.h)("option",{key:`${t.name}-${e}-${n}`,value:e,selected:this.currentBranch===e},e))))))}};return u.style=".gh-version-switcher select{max-width:196px}",u})()}}]);