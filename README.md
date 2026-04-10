Familieoppgave-manager:
Dette er en fullstack webapplikasjon designet for å organisere og delegere husarbeid innad i en familie eller et kollektiv. Systemet bruker en spill-lignende tilnærming (gamification) der brukere får poeng for utførte oppgaver, som vises i en sanntids-rangering.

 
Applikasjonen er bygget med følgende teknologier:

Backend: Node.js med Express framework.

Database: SQLite3 (Relasjonell database).

Frontend: HTML5, CSS3 (Flexbox/Grid), og Vanilla JavaScript (Fetch API).

 
Følg disse trinnene for å kjøre prosjektet lokalt på din maskin:

 Forutsetninger
Sørg for at du har Node.js installert (anbefalt versjon LTS).

 Klon eller last ned prosjektet
Last ned prosjektmappen og åpne den i din terminal eller i Visual Studio Code.

 Installer avhengigheter
Kjør følgende kommando i terminalen (i prosjektets rotmappe) for å installere nødvendige pakker som express og sqlite3:

Bash
npm install
Start serveren
For å starte Node.js-serveren, kjør:

Bash
node server.js
Alternativt, hvis package.json er konfigurert:

Bash
npm start
 Åpne i nettleser
Når serveren kjører, åpne din foretrukne nettleser og gå til:
http://localhost:3000

 Prosjektstruktur:
/public: Inneholder alle statiske filer for frontend (HTML, CSS, JS).

/database: Inneholder SQLite-databasefilen family.db.

server.js: Hovedfilen for backend-logikk og API-ruter.

package.json: Definerer prosjektets avhengigheter og skript.

*.md: Dokumentasjonsfiler (Kravspesifikasjon, GDPR, osv.).

Bruk av applikasjonen
Velg person og oppgave: Bruk nedtrekksmenyene for å tildele et gjøremål.

Fullfør oppgave: Trykk på avhukingsboksen når oppgaven er gjort. Dette vil oppdatere poengsummen i rangeringen til høyre.

Slett: Bruk søppelbøtte-ikonet for å fjerne tildelinger permanent fra databasen.

Sikkerhet og personvern
SQL Injection: Systemet bruker parametriserte spørringer (?) for å forhindre sikkerhetshull.

GDPR: Applikasjonen praktiserer dataminimering og lagrer kun nødvendig informasjon (navn og oppgaver).

Utviklet av Yeva Malyshko 

Eksamensprosjekt: Informasjonsteknologi 2026
