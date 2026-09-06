/* empty css                 */const s={title:"99-Development/Playground",parameters:{layout:"fullscreen"}},e=()=>{const n=document.getElementById("preview-body");return n.style.display="none",`
    <div class="iframe-container">
      <iframe src="playground-showcase/index.html#/editor" height="100%" width="100%" />
    </div>`};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const previewBody = document.getElementById('preview-body');
  previewBody.style.display = 'none';
  return \`
    <div class="iframe-container">
      <iframe src="playground-showcase/index.html#/editor" height="100%" width="100%" />
    </div>\`;
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const i=["Editor"];export{e as Editor,i as __namedExportsOrder,s as default};
