# ADR-04 - Bundling für Pattern Lab Komponenten

|                |                                                        |
| -------------- | ------------------------------------------------------ |
| **Datum**      | 2020-11-11                                             |
| **Status**     | Entschieden                                            |
| **Beteiligte** | Waldemar Schäfer, Maximilian Franzke, Robert Lukaschek |

## Entscheidung und Begründung

Wir entscheiden uns für die Option "D - Storybook".
Im Moment haben wir keinen Bedarf für komplexe Komponenten in Pattern Lab
und somit können wir mit den Nachteilen gut leben.

Soll sich der Bedarf Richtung konplexerer Komponenten für Pattern Lab ändern,
müssen wir diese Entscheidung nochmal betrachten.

## Problembeschreibung und Kontext

Neben den DB-UI Elements Komponenten, die als Lib consumiert werden sollen, gibt es Bedarf
für Komponenten um das Pattern Lab (Storybook) zu erweitern.

Nutzt man für Pattern Lab Komponenten Stencil, dann werden diese auch im npm-Paket
mitveröffentlicht, so dass die Consumenten unnötig ihre Apps größer machen müssen.

## Rahmenbedingungen und Entscheidungskriterien

### Rahmenbedingungen

Wir wollen im Pattern Lab die Komponenten möglichst genauso nutzen, wie unsere Consumer.
Wir wollen, dass keine unnötigen Artefakten im npm-Paket veröffentlicht werden.

### Entscheidungskriterien

Einfach
* möglichst nah an Stencil bzw. Storybook
* möglichst keine weiteren Libs

Verständlich
* Ausnahmen zum Vorgehen der Frameworks müssen gut dokumentiert sein
* Keine bzw. nur die nötigste Logik in Storybook Dateien


## Alternativen

### A - zwei Konfigurationen

In der /tsconfig.json kann man Ordner aus der Build excludieren.
Die Komponenten dort werden dann nicht verarbeitet und landen somit nicht im *dist*

```javascript
  "exclude": [
    "node_modules",
    "src/components/development
  ]
```

Damit die Pattern Lab Komponenten in Storybook benutzt werden können, müssen diese allerdings gebaut werden.
Ansatz hier ist zwei Konfigurationen: eine für Pattern Lab und eine für *npm publish*

#### Bewertung

Im Moment die einzige Möglichkeit in Stencil die Komponenten aus *dist* zu entfernen.
Der Nachteil ist die höhere Komplexität in der CI/CD Pipeline in der wir heute am wenigsten Know How haben.

### B - Bundles

In der */stencil.config.ts* ist es möglich mehrere Komponenten in ein Bundle zusammenführen.

```javascript
  "bundles": [
    { components: ['patternlab-iconbox', 'patternlab-page-icons'] },
    { components: ['theme-switcher'] }
  ],
```

Man würde alle Pattern Lab Komponenten in ein Bundle platzieren und somit die Vermischung zwischen
Pattern Lab und DB-UI Komponenten reduzieren.

#### Bewertung

Problem: in */dist/db-ui-elements/de-ui-elements.esm.js* werden alle Module referenziert.
Somit würden die Consumenten, die *{ defineCustomElements } from '../dist/esm/loader'* nutzen
auch Pattern Lab Komponenten in ihrer App definieren.

### C - Anderes Templating Mechanismus

Nutzung anderer Technologien wie lit-html oder natives custom elements für Pattern Lab.

#### Bewertung

Koplexität und auch die Einarbeitungszeit werhöhen sich signifikant.

### D - Storybook

Keine Components in Stencil zu bauen und alle Pattern Lab Components in Storybook implementieren

MDX basiert auf React und kann um dynamische Funktionalität von React erweitert werden. Allerdins ohne Tests und Intellisence in VS Code.

```javascript
export const ColorsList = (args) => {
    const [colorKeys,setColorKeys] = useState([])
    useEffect(()=>{
        args.colorKeys.then(ck => {setColorKeys(ck)})
    },[])
    return (
        <Canvas>
        {
          <ul className="colorList">
              {
                colorKeys
                    .filter(propKey => propKey.startsWith('--db-color-'))
                    .map((propKey,i) => <li key={i}>{propKey}</li>)
              }
              <li>tmp</li>
          </ul>
        }
        </Canvas>
    )
}
```

#### Bewertung

* MDX ist verbreitet  <https://mdxjs.com/>
* MDX setzt die Kenntnis von React und MD voraus
* VS Code unterstützt kein Intellisence für MDX
* MDX muss um React Code erweitert werden um asynchrone Features (z.B. Änderung der Themes) zu nutzen.  

### E - Eigenes Repo für Pattern Lab/Styleguide

Pattern Lab und die dazu gehörigen Komponenten aus DB-UI Elements rausnehmen und in ein eigenes Repository
umziehen. Dort DB-UI Elements importieren.
Auch ein Monorepo Ansatz ist denkbar

#### Bewertung

Die Stories für Storybooks helfen während der Entwicklung die Komponenten zu visualisieren.
Zwischen Änderung am Code und Änderung in der Visualisierung (s.g. Feedback-Zeit) sind paar Sekunden.
Würde man Storybook aus DB-UI Elements rausziehen, müssen wir die Vusualisierung während der Entwicklung
auf eine andere Weise implementieren müssen und die Verbinung zwischen DB-UI Elements und Storybook  
müsste entweder über Monorepo oder npm Paket abgebildet werden, was die Feedback-Zeit deutlich erhöhen würde.
Außerdem verlieren wir die Feature-Klammer in Form von einem Merge-Request, wenn wir mehrere Repos benutzen.

## Konsequenzen

Umschreiben der vorhandenen Pattern Lab Komponents von Stencil auf MDX in Storybook

## Links
