import{r as e,h as s,H as t}from"./p-b09383f7.js";const i=".gh-version-switcher select{max-width:196px}";const h=i;const n=class{constructor(s){e(this,s);this._defaultBranch="latest";this.stripString=e=>e.replace(/[^a-zA-Z0-9-]/g,"");this.fetchFromGitHubApi=async e=>{const s=await fetch(e);return await s.json()};this.setCurrentBranch=e=>{const s=window.location.href;const t=e.find((e=>s.includes(e)));if(t){this.currentBranch=t}};this.setBranches=e=>{const s=e.map((e=>e.name)).filter((e=>e!=="gh-pages"&&!e.includes("dependabot")));s.forEach((e=>{const s=this.groups.find((s=>e.startsWith(s.prefix)));if(s){s.branches.push(e)}else{this.groups.at(-1).branches.push(e)}}));this.setCurrentBranch(s)};this.setTags=e=>{const s=e.map((e=>e.name));s.forEach((e=>{this.groups[0].branches.push(e)}));this.setCurrentBranch(s)};this.owner=undefined;this.repo=undefined;this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}];this.currentBranch=this._defaultBranch;this.cleanOwner=undefined;this.cleanRepo=undefined}get defaultBranch(){return this._defaultBranch}set defaultBranch(e){this._defaultBranch=e}async componentWillLoad(){const e=this.stripString(this.owner);this.cleanOwner=e;const s=this.stripString(this.repo);this.cleanRepo=s;const t=await this.fetchFromGitHubApi(`https://api.github.com/repos/${e}/${s}/branches`);this.setBranches(t);const i=await this.fetchFromGitHubApi(`https://api.github.com/repos/${e}/${s}/tags`);this.setTags(i)}handleChange(e,s,t){if(s&&t){const i=top.location.href;const h=i.split("?");const n=h[h.length-1];const a=e.split(".").length===3&&e.startsWith("v");top.location=`https://${s}.github.io/${t}${this._defaultBranch===e?"":`${a?"/version":"/review"}/${e}`}/?${n}`}}render(){var e;return s(t,{key:"66a2543e72839abc7f67cb93aecc3a6cd0fbac1e"},((e=this.groups)===null||e===void 0?void 0:e.length)>0&&s("db-select",{key:"0069b07f3c022517f0037fbb3af6a7d1bb6ca8c2",class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:e=>this.handleChange(e.target.value,this.cleanOwner,this.cleanRepo)},s("option",{key:"cd968ac0508b919a08ee39108366e02f124a7830",value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter((e=>{var s;return((s=e.branches)===null||s===void 0?void 0:s.length)>0})).map((e=>s("optgroup",{key:e.name,label:e.name},e.branches.map(((t,i)=>s("option",{key:`${e.name}-${t}-${i}`,value:t,selected:this.currentBranch===t},t))))))))}};n.style=h;export{n as github_version_switcher};
//# sourceMappingURL=p-6cba3cea.entry.js.map