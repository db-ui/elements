# ADR-06 - E2E Testing Puppeteer vs Cypress

|                |                  |
| -------------- | ---------------- |
| **Datum**      | 2022-01-11       |
| **Status**     |  entschieden     |
| **Beteiligte** |  Nicolas Merget  |

## Entscheidung und Begründung

Es sollen weiterhin e2e Tests durchgeführt werden. Das aktuelle image für [Puppeteer](https://github.com/buildkite/docker-puppeteer#deprecated) wird nicht mehr unterstützt. Außerdem wird node 16 verwendet.
Dadurch war es nicht mehr möglich in der CICD alle e2e Tests erfolgreich laufen zu lassen.
Als Alternative wird [Cypress](https://www.cypress.io/) verwendet, da es einfacher zu benutzen ist, die Möglichkeit bietet, Videos in der Pipeline zu generieren und zusätzlich noch mit node 16 supportet wird.

## Problembeschreibung und Kontext

Die DB UI Elements sollen in einem Browser auf Funktionalität getestet werden, um sicher zu stellen, dass diese entsprechend in DB Projekten eingesetzt werden können.

## Rahmenbedingungen und Entscheidungskriterien

### Rahmenbedingungen

Es soll ein Framework benutzt werden zum Validieren der Lauffähigkeit der einzelnen Komponenten.

### Entscheidungskriterien

- Verfügbarkeit
- Komplexität
- Wartbarkeit

## Alternativen

### A - Cypress

#### Bewertung

Cypress ist sehr einfach zu benutzen und bietet sehr viel Komfort out-of-the-box.

## Konsequenzen

Bei `stencil generate` sollten e2e Tests nicht ausgewählt werden. Dafür muss man manuell einen e2e Test im Ordner `cypress` anlegen.

## Links

- <https://www.cypress.io/>
- <https://github.com/buildkite/docker-puppeteer>