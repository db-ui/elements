# ADR-02 - Styling

|                |                                                        |     |
| -------------- | ------------------------------------------------------ | --- |
| **Datum**      | 2020-07-01                                             |     |
| **Status**     | Evaluierung                                            |     |
| **Beteiligte** | Waldemar Schäfer, Maximilian Franzke, Robert Lukaschek |     |

## Entscheidung und Begründung

Wir wollen ein DB UI Elements für alle Mandanten liefern und entscheiden uns für Alternative A.

Diese Option verspricht weniger Komplexität und höhere Wartbarkeit.
Die Trennung von Style (DB UI Core) und Komponenten (DB UI Elements) ermöglicht unabhängige Release-Zyklen.

Wir werden kritisch die Performance im Auge behalten und ggf. bei Bedarf optimieren.

Es ist uns bewußt, dass je größer die Unterschiede zwischen den Mandanten sind um so komplexer die Lösung wird. Es gibt allerdings die Absicht, die Styles der Mandanten konzernweit anzugleichen und wir werden aktiv darauf hinwirken.

## Problembeschreibung und Kontext

In DB UI Elements gibt es drei Wirkungsbereiche für CSS:

### globales CSS

- ist definiert auf der gesamten Seite
- enthält die unternehmensweite Style Definitionen wie z.B. Farben und Fonts

### lokales CSS

- gilt nur für die Komponente

### shared CSS

- gilt für die Komponente und soll global gesetzt werden.

Mit der unter dem Sammelbegriff "Web Components" eingeführte Technologie "Shadow DOM" lassen sich sowohl reguläre Elemente als auch Custom Elements um einen eingebetteten, abgetrennten DOM erweitern; dieser dient der Abgrenzung von Styles und JavaScript, was dazu führt, dass globale CSS Definitionen und JavaScript Selektionen in der Komponente nicht wirken.

Stand heute werden nur CSS-Variablen durch den Shadow DOM durchgelassen. Das Vererben weiterer CSS Deklarationen in den Shadow DOM lässt sich durch weitere CSS Deklarationen verhindern (`:host{all:initial}`).

Die Herausforderung ist, zu definieren, wie die einzelnen Wirkungsbereiche von CSS technisch umgesetzt werden sollen.

Insbesondere soll DB UI Elements mandantenfähig sein, was bedeutet, dass sich ein heute noch nicht bekannter Teil des Styles pro Mandant unterscheiden wird.

## Rahmenbedingungen und Entscheidungskriterien

### Rahmenbedingungen

- DB UI Elements wird mit Web Components umgesetzt
- DB UI Elements muss mandantenfähig sein
- DB UI Core ist führend für Style-Definition
- Style-Vorgaben werden mehrmals pro Jahr geändert

### Entscheidungskriterien

#### Flexibilität

- Die zukünftigen Änderungen am Style sollen einfach umgesetzt werden können
- Anwender sollen in einem kontrollierten Rahmen Anpassungen an den Komponenten vornehmen können.

#### Aktualität

- DB UI Elements folgt zeitnah den UI/UX Vorgaben des Konzerns

#### Performance

- Die Nutzung von Web Components soll vergleichbare Performance zu Komponenten der Web Frameworks liefern.

#### Wartbarkeit

- DB UI Elements soll möglichst selten wegen Style Anpassungen released werden.

## Alternativen

### A - DB UI Elements mandanten-unabhängig

DB UI Elements beschränkt sich auf mandanten-unabhängiges Style. Die Spezifika der Mandaten werden in DB UI Core behandelt, indem mandanten-spezifische Artefakte angeboten werden.
Dadurch ergibt sich folgende Aufteilung:

- Mandanten-spezifisch -> Runtime
- Mandanten-unabhängig -> Buildtime

#### Runtime

- DB UI Core stellt pro Mandant Design Tokens in Form von CSS-Variablen bereit.
- In Elementen werden diese Variablen benutzt, um den mandaten-spezifischen Teil zu definieren.
- Die konsumierende Applikation nimmt für sich relevante Mandanten Design Tokens aus DB UI Core. Somit werden die Web Components konfiguriert. Ein Wechsel zur Runtime ist möglich.

#### Buildtime

- CSS Definitionen werden zur Buildtime in den Web Components definiert
- Die CSS Definitionen sollten sinnvollerweise aus DB UI Core importiert werden. Für mandanten-spezifische Styledefinitionen sollen CSS Variablen genutzt werden.
- Unterschiede im Markup werden in JavaScript behandelt (switch, if/then/else)

#### Bewertung

##### Flexibilität

- Die Anzahl der Design Tokens kann je nach Bedarf wachsen.
- Bei Änderungen der Design Tokens muss DB UI Elements nicht verändert werden.
- Style-Definitionen innerhalb von Web Components ohne Variablen können nicht durch die konsumierenden Projekte angepasst werden.

##### Aktualität

- Style-Lifecycle kann vollständig in DB UI Core behandelt werden. DB UI Elements muss nur wenige Anpassungen machen, um den Style aktuell zu halten

##### Performance

- Große Menge an Variablen kann negative Auswirkungen auf Performance haben.
- Es sind Optimierungen möglich, die jedoch zu erhöhter Komplexität führen.

##### Wartbarkeit

- Keine Aufsplittung der DB UI Elements pro Mandant
- Die Komplexität der Style Definition und des Style-Änderungskreislauf sind ausserhalb von DB UI Elements
- Strikte Trennung zwischen Konfiguration (runtime) und Implementierung (buildtime) sind leicht verständlich

### B - DB UI Elements mandanten-abhängig

Es wird/werden mandanten-spezifische DB UI Elements Artefakt(e) bereitgestellt
DB UI Core liefert CSS oder auch SASS Definitionen, die in DB UI Elements in die Web Components implementiert werden. Dabei werden keine CSS Variablen benutzt, sondern der Style wird in die Web Komponenten zur buildtime fest reinkompiliert.

Die Unterschiede zwischen den Mandanten werden durch Erstellung mehrerer DB UI Elements Artefakte abgebildet. Somit wird pro Mandant mindestens ein Artefakt gepflegt.

#### Bewertung

##### Flexibilität

- Die Unterschiede zwischen Mandanten können ohne Einschränkung groß sein
- Je nach Konfiguration (Shadow DOM; CSS `:host{all:initial}`) kann gesteuert werden, inwiefern sich die Komponenten anpassen lassen.

##### Aktualität

- Änderungen am Style implizieren immer eine neue Version der DB UI Elements mit Code Änderungen

##### Performance

- Durch den Zuschnitt auf die Bedürfnisse des Mandanten kann Performance optimiert werden. Markup, Style und JavaScript sind somit kleiner.

##### Wartbarkeit

- Es müssen unterschiedliche Stränge der DB UI Elements gewartet werden. Diese werden schnell auseinander laufen.
- Styles-Änderungen führen immer zu neuen Build und zu Code-Änderungen in DB UI Elements
- Wenn in DB UI Elements SASS eingesetzt werden wird, wäre die SASS Logik in DB UI Elements eng mit der SASS Logik in DB UI Core verknüpft

## Konsequenzen

## Links

<https://db.de/nwati4>
