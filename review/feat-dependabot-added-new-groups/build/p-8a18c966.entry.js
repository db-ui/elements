import{r as s,h as e,H as t}from"./p-2cf5707e.js";const i=".gh-version-switcher select{max-width:196px}";const h=i;const n=class{constructor(e){s(this,e);this._defaultBranch="latest";this.stripString=s=>s.replace(/[^a-zA-Z0-9-]/g,"");this.fetchFromGitHubApi=async s=>{const e=await fetch(s);return await e.json()};this.setCurrentBranch=s=>{const e=window.location.href;const t=s.find((s=>e.includes(s)));if(t){this.currentBranch=t}};this.setBranches=s=>{const e=s.map((s=>s.name)).filter((s=>s!=="gh-pages"&&!s.includes("dependabot")));e.forEach((s=>{const e=this.groups.find((e=>s.startsWith(e.prefix)));if(e){e.branches.push(s)}else{this.groups.at(-1).branches.push(s)}}));this.setCurrentBranch(e)};this.setTags=s=>{const e=s.map((s=>s.name));e.forEach((s=>{this.groups[0].branches.push(s)}));this.setCurrentBranch(e)};this.owner=undefined;this.repo=undefined;this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}];this.currentBranch=this._defaultBranch;this.cleanOwner=undefined;this.cleanRepo=undefined}get defaultBranch(){return this._defaultBranch}set defaultBranch(s){this._defaultBranch=s}async componentWillLoad(){const s=this.stripString(this.owner);this.cleanOwner=s;const e=this.stripString(this.repo);this.cleanRepo=e;const t=await this.fetchFromGitHubApi(`https://api.github.com/repos/${s}/${e}/branches`);this.setBranches(t);const i=await this.fetchFromGitHubApi(`https://api.github.com/repos/${s}/${e}/tags`);this.setTags(i)}handleChange(s,e,t){if(e&&t){const i=top.location.href;const h=i.split("?");const n=h[h.length-1];const a=s.split(".").length===3&&s.startsWith("v");top.location=`https://${e}.github.io/${t}${this._defaultBranch===s?"":`${a?"/version":"/review"}/${s}`}/?${n}`}}render(){var s;return e(t,{key:"ecd05b05d93ab5bbffd0c281b1bc42e7e1999f2a"},((s=this.groups)===null||s===void 0?void 0:s.length)>0&&e("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:s=>this.handleChange(s.target.value,this.cleanOwner,this.cleanRepo)},e("option",{value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter((s=>{var e;return((e=s.branches)===null||e===void 0?void 0:e.length)>0})).map((s=>e("optgroup",{key:s.name,label:s.name},s.branches.map(((t,i)=>e("option",{key:`${s.name}-${t}-${i}`,value:t,selected:this.currentBranch===t},t))))))))}};n.style=h;export{n as github_version_switcher};
//# sourceMappingURL=p-8a18c966.entry.js.map