import{r,h as a}from"./index.72cd14ef.js";const i=".rea-page{height:100%;min-height:100%;overflow:hidden;display:flex;flex-direction:column}.rea-page header,.rea-page footer{display:flex;flex:0 1 auto;flex-grow:0;flex-shrink:0}.rea-page main{display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;width:100%;margin:0 auto}@media screen and (min-width: 1088px){.rea-page main{max-width:960px}}@media screen and (min-width: 1280px){.rea-page main{max-width:1152px}}@media screen and (min-width: 1472px){.rea-page main{max-width:1344px}}.rea-page main>*{overflow:auto;height:100%}",s=class{constructor(t){r(this,t)}componentWillLoad(){Array.from(document.getElementsByTagName("html")).forEach(e=>{e.style.height="100%",e.style.overflow="hidden"}),Array.from(document.getElementsByTagName("body")).forEach(e=>{e.style.height="100%",e.style.margin="0px"});const o=document.getElementById("root");o&&(o.style.height="100%");const n=document.getElementById("app");n&&(n.style.height="100%")}render(){return a("div",{class:"rea-page"},a("slot",{name:"header"}),a("main",{class:"rea-main"},a("slot",null)),a("slot",{name:"footer"}))}};s.style=i;export{s as db_page};
