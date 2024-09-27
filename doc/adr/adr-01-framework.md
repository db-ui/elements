# ADR-01 - Framework für die Erstellung von Web Components

Datum: 2018-04-02

## Status

Evaluierung

## Kontext

Wir werden Web Components für die UI Library erstellen.
Es geht darum, dies möglichst effizient zu tun.
Folgende Optionen haben wir uns angeschaut:

- StencilJS (<https://stenciljs.com/>)
- Vanilla JS
- Polymer (<https://www.polymer-project.org/>)
- lit-element (<https://lit-element.polymer-project.org>)

Web Links

- <https://medium.com/@thangman22/stencil-js-vs-lit-element-vs-vanilla-vs-shadow-dom-vs-vue-js-5d2ade971183>
- <https://github.com/shprink/web-components-todo>
- <https://wc-todo.firebaseapp.com/>

## Entscheidung

Wir nehmen StencilJS weil:

- generierte Artefakte sind nur marginal größer als Vanilla JS
- Polyfills werden automatisch behandelt
- flexibles Build System
- Mit Ionic steht ein größerer Projekt als Maintainer dahinter
- Unterstützt Sass
- TypeScript

## Beteiligte

Waldemar Schäfer
