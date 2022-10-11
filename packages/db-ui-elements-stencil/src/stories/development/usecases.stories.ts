export default {
  title: '99-Development/Shadow DOM tests'
};
const content = 'Button';

export const UseCases = () => {
  return `
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
              custom ${content}
          </db-button>

          <button>native ${content}
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
    `;
};

if (!customElements.get('a-component')) {
  customElements.define(
    'a-component',
    class extends HTMLElement {
      constructor() {
        super();

        const template = document.createElement('template');

        template.innerHTML = `
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
              custom ${content}
          </db-button>

          <button>native ${content}
          </button>
        </div>
      `;

        this.attachShadow({ mode: 'open' }).appendChild(
          template.content.cloneNode(true)
        );
      }
    }
  );
}
if (!customElements.get('aa-component')) {
  customElements.define(
    'aa-component',
    class extends HTMLElement {
      constructor() {
        super();

        const template = document.createElement('template');
        template.innerHTML = `
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
      `;

        this.attachShadow({ mode: 'open' }).appendChild(
          template.content.cloneNode(true)
        );
      }
    }
  );
}
