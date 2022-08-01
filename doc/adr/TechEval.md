# Technische Evaluierung

## Kriterien

### Grundsätzliche Eigenschaften
* Robust -> ever green, möglichst wenig JS
* Einfach -> wenig Code, nah am Standard, kleines Interface für Consumer
* Flexibel -> Default soll nach DB UI Core (DBUX & Enterprise & Consumer) aussehen, offen für Anpassungen (Liskov Substitution Prinzip)
* Modular -> Consumer kann einzelne Komponente nutzen ohne das gesamte Paket benutzen zu müssen

### Technische Eigenschaften
* Größe des Bundles pro Element
* Explizites Interface: Methoden, Parameter, Events, Style
* In JavaScript keine Seiteneffekte außerhalb der Komponente
* Einzeln testbar
* i18n
* Accessibility

### Style
* Style für Themes muss von außen der Komponenten kommen
* Sonst soll das Style von außen gekappselt sein

sonst ein Subset von <https://github.com/webcomponents/gold-standard/wiki>


## Anforderungen aus Entwicklerperspektive (Konsument der DB UI Elements)
* Grundlagen
  * Zentral versioniert
  * Changelog
  * Release Notes
  * Installationsanleitung
  * Anwendungsprinzipien
* Einfache Konsumierbarkeit
  * Standarisierter Komponentenaufruf (living standard)
  * Intuitive Anwendung
    * Sprechende & einheitliche Attributnamen
    * Einheitliche Referenzierung
    * Trennung Semantik von Styling (relevanten Tags) / keine Styling relevanten Kompositionen, sondern lediglich logische
    * Als Leitmotiv sollten stets bestehende HTML Tag Implementierungen herangezogen werden, da diese eine etablierte und adaptierbare Handhabung bedingen.
  * Einfacher Installationsprozess
* Enkapsuliertes Styling
  * wg. Vererbung
* Standard-Kompatibilität
  * Bei Wrapping nativer Elemente sollten diese nach außen wie nach innen dem Standard folgen in Bezug auf Funktionalität und die APIs
  * Living Standards
* Möglichst Framework agnostisch
* Komponenten sind gekapselt ohne Auswirkung nach außen


Anforderungen aus verschiedenen Domänen
* Unterstützung backendseitiger template-/data-binding Projekte (Java, PHP, Node.js)
* Unterschiedliches Theming verschiedener Geschäftsbereiche
* Governance (Fremdentwicklung & Konzeption mit Designern)
* CSS statt SCSS verwenden
