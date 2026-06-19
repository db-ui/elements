const c={title:"99-Development/Shadow DOM tests"},e="Button",t=()=>`
    <style>
        body {
            display: block;
            padding:10px;
            background-color: var(--db-03-01);
        }

        button, db-button {
            margin-left: 10px;
        }

        section {
          margin-top: 30px;
        }
    </style>

    <h1 class="elm-headline">Technische Use Cases</h1>

    <form action="#" target="_blank">
      <section>
        <b>Testformular</b>

        <p>
          <input type='text' name='input_name'/>
        </p>
      </section>

      <section>
        <b>Element in der Seite direkt</b>

        <p>
          <db-button icon='alarm'>
              custom ${e}
          </db-button>

          <button>native ${e}
          </button>
        </p>
      </section>

      <section>
        <b>Element in einem Shadow DOM</b>

        <p>
          <a-component></a-component>
        <p>
      </section>

      <section>
          <b>Element in einem verschachtelten Shadow DOM</b>

          <p>
            <aa-component></aa-component>
          </p>
        <p>
      </section>
    </form>
    `;customElements.get("a-component")||customElements.define("a-component",class extends HTMLElement{constructor(){super();const n=document.createElement("template");n.innerHTML=`
        <style>
          :host {
            display: block;
            padding:10px;
            background-color: var(--db-03-04);
        }
        button,db-button {
            margin:10px;
        }
        span{
            font-style:italic;
            font-weight:bold;
        }

        .subbox {
          margin-top: 10px;
        }
        </style>

        <div>a-component</div>

        <div class="subbox">
          <db-button icon='alarm'>
              custom ${e}
          </db-button>

          <button>native ${e}
          </button>
        </div>
      `,this.attachShadow({mode:"open"}).appendChild(n.content.cloneNode(!0))}});customElements.get("aa-component")||customElements.define("aa-component",class extends HTMLElement{constructor(){super();const n=document.createElement("template");n.innerHTML=`
          <style>
            :host {
              display: block;
              padding: 10px;
              background-color: var(--db-03-07);
            }
        </style>

        <div class="box">aa-component</div>

        <div class="subbox">
          <a-component></a-component>
        </div>
      `,this.attachShadow({mode:"open"}).appendChild(n.content.cloneNode(!0))}});var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return \`
    <style>
        body {
            display: block;
            padding:10px;
            background-color: var(--db-03-01);
        }

        button, db-button {
            margin-left: 10px;
        }

        section {
          margin-top: 30px;
        }
    </style>

    <h1 class="elm-headline">Technische Use Cases</h1>

    <form action="#" target="_blank">
      <section>
        <b>Testformular</b>

        <p>
          <input type='text' name='input_name'/>
        </p>
      </section>

      <section>
        <b>Element in der Seite direkt</b>

        <p>
          <db-button icon='alarm'>
              custom \${content}
          </db-button>

          <button>native \${content}
          </button>
        </p>
      </section>

      <section>
        <b>Element in einem Shadow DOM</b>

        <p>
          <a-component></a-component>
        <p>
      </section>

      <section>
          <b>Element in einem verschachtelten Shadow DOM</b>

          <p>
            <aa-component></aa-component>
          </p>
        <p>
      </section>
    </form>
    \`;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const i=["UseCases"];export{t as UseCases,i as __namedExportsOrder,c as default};
