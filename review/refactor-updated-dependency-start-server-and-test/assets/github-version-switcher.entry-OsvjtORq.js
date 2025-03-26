import{r as c,h as a,H as o}from"./preview-DT5B9jtg.js";import"./iframe-EAYhwuk9.js";import"../sb-preview/runtime.js";const p=".gh-version-switcher select{max-width:196px}",u=p,f=class{constructor(r){c(this,r),this._defaultBranch="latest",this.stripString=e=>e.replace(/[^a-zA-Z0-9-]/g,""),this.fetchFromGitHubApi=async e=>await(await fetch(e)).json(),this.setCurrentBranch=e=>{const t=window.location.href,s=e.find(n=>t.includes(n));s&&(this.currentBranch=s)},this.setBranches=e=>{const t=e.map(s=>s.name).filter(s=>s!=="gh-pages"&&!s.includes("dependabot"));t.forEach(s=>{const n=this.groups.find(i=>s.startsWith(i.prefix));n?n.branches.push(s):this.groups.at(-1).branches.push(s)}),this.setCurrentBranch(t)},this.setTags=e=>{const t=e.map(s=>s.name);t.forEach(s=>{this.groups[0].branches.push(s)}),this.setCurrentBranch(t)},this.owner=void 0,this.repo=void 0,this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.cleanOwner=void 0,this.cleanRepo=void 0}get defaultBranch(){return this._defaultBranch}set defaultBranch(r){this._defaultBranch=r}async componentWillLoad(){const r=this.stripString(this.owner);this.cleanOwner=r;const e=this.stripString(this.repo);this.cleanRepo=e;const t=await this.fetchFromGitHubApi(`https://api.github.com/repos/${r}/${e}/branches`);this.setBranches(t);const s=await this.fetchFromGitHubApi(`https://api.github.com/repos/${r}/${e}/tags`);this.setTags(s)}handleChange(r,e,t){if(e&&t){const n=top.location.href.split("?"),i=n[n.length-1],h=r.split(".").length===3&&r.startsWith("v");top.location=`https://${e}.github.io/${t}${this._defaultBranch===r?"":`${h?"/version":"/review"}/${r}`}/?${i}`}}render(){var r;return a(o,{key:"66a2543e72839abc7f67cb93aecc3a6cd0fbac1e"},((r=this.groups)===null||r===void 0?void 0:r.length)>0&&a("db-select",{key:"0069b07f3c022517f0037fbb3af6a7d1bb6ca8c2",class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:e=>this.handleChange(e.target.value,this.cleanOwner,this.cleanRepo)},a("option",{key:"cd968ac0508b919a08ee39108366e02f124a7830",value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter(e=>{var t;return((t=e.branches)===null||t===void 0?void 0:t.length)>0}).map(e=>a("optgroup",{key:e.name,label:e.name},e.branches.map((t,s)=>a("option",{key:`${e.name}-${t}-${s}`,value:t,selected:this.currentBranch===t},t))))))}};f.style=u;export{f as github_version_switcher};
