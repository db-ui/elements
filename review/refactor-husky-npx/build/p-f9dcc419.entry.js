import{r as s,h as t,H as e}from"./p-d8541341.js";const i=".gh-version-switcher select{max-width:196px}";const h=class{constructor(t){s(this,t);this._defaultBranch="latest";this.stripString=s=>s.replace(/[^a-zA-Z0-9-]/g,"");this.fetchFromGitHubApi=async s=>{const t=await fetch(s);return await t.json()};this.setCurrentBranch=s=>{const t=window.location.href;const e=s.find((s=>t.includes(s)));if(e){this.currentBranch=e}};this.setBranches=s=>{const t=s.map((s=>s.name)).filter((s=>s!=="gh-pages"&&!s.includes("dependabot")));t.forEach((s=>{const t=this.groups.find((t=>s.startsWith(t.prefix)));if(t){t.branches.push(s)}else{this.groups.at(-1).branches.push(s)}}));this.setCurrentBranch(t)};this.setTags=s=>{const t=s.map((s=>s.name));t.forEach((s=>{this.groups[0].branches.push(s)}));this.setCurrentBranch(t)};this.owner=undefined;this.repo=undefined;this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}];this.currentBranch=this._defaultBranch;this.cleanOwner=undefined;this.cleanRepo=undefined}get defaultBranch(){return this._defaultBranch}set defaultBranch(s){this._defaultBranch=s}async componentWillLoad(){const s=this.stripString(this.owner);this.cleanOwner=s;const t=this.stripString(this.repo);this.cleanRepo=t;const e=await this.fetchFromGitHubApi(`https://api.github.com/repos/${s}/${t}/branches`);this.setBranches(e);const i=await this.fetchFromGitHubApi(`https://api.github.com/repos/${s}/${t}/tags`);this.setTags(i)}handleChange(s,t,e){if(t&&e){const i=top.location.href;const h=i.split("?");const n=h[h.length-1];const a=s.split(".").length===3&&s.startsWith("v");top.location=`https://${t}.github.io/${e}${this._defaultBranch===s?"":`${a?"/version":"/review"}/${s}`}/?${n}`}}render(){var s;return t(e,null,((s=this.groups)===null||s===void 0?void 0:s.length)>0&&t("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:s=>this.handleChange(s.target.value,this.cleanOwner,this.cleanRepo)},t("option",{value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter((s=>{var t;return((t=s.branches)===null||t===void 0?void 0:t.length)>0})).map((s=>t("optgroup",{key:s.name,label:s.name},s.branches.map(((e,i)=>t("option",{key:`${s.name}-${e}-${i}`,value:e,selected:this.currentBranch===e},e))))))))}};h.style=i;export{h as github_version_switcher};
//# sourceMappingURL=p-f9dcc419.entry.js.map