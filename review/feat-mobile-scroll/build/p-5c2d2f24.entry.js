import{r as e,h as a}from"./p-5f545e05.js";const n=class{constructor(a){e(this,a)}componentWillLoad(){if(window.screen.width>=768){Array.from(document.getElementsByTagName("html")).forEach((e=>{e.style.height="100%",e.style.overflow="hidden"})),Array.from(document.getElementsByTagName("body")).forEach((e=>{e.style.height="100%",e.style.margin="0px"}));const e=document.getElementById("root");e&&(e.style.height="100%");const a=document.getElementById("app");a&&(a.style.height="100%")}}render(){return a("div",{class:"rea-page"},a("slot",{name:"header"}),a("main",{class:"rea-main"},a("slot",null)),a("slot",{name:"footer"}))}};n.style=".rea-page{height:100%;min-height:100%;overflow:hidden;display:flex;flex-direction:column}.rea-page header,.rea-page footer{display:flex;flex:0 1 auto;flex-grow:0;flex-shrink:0}.rea-page main{display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;width:100%;margin:0 auto}@media screen and (min-width: 1088px){.rea-page main{max-width:960px}}@media screen and (min-width: 1280px){.rea-page main{max-width:1152px}}@media screen and (min-width: 1472px){.rea-page main{max-width:1344px}}.rea-page main>*{overflow:auto}";export{n as db_page}