Systemarkitektur

Applikasjonen er bygget som en fullstack-løsning med en todelt arkitektur:

## Frontend
En "Single Page Application" (SPA) basert på HTML5, CSS3 og Vanilla JavaScript.  
All kommunikasjon med serveren skjer asynkront via JSON og Fetch API, noe som gir en sømløs brukeropplevelse uten full sideinnlasting.

## Backend
Kjører på Node.js med Express.js. Serveren håndterer API-forespørsler, utfører SQL-spørringer mot databasen og serverer statiske filer fra /public-mappen.

## Database
En relasjonell SQLite-database (family.db).  
Valget er gjort for å ha en selvstendig, filbasert database som er enkel å flytte og krever minimal konfigurasjon.

---

# 2. Databasedesign og normalisering

Databasen er designet etter relasjonsmodellen for å sikre dataintegritet og redusere redundans.

## 2.1 Tabellbeskrivelser

### brukere
Inneholder oversikt over alle familiemedlemmer.
- id (PK): Unik identifikator
- navn: Brukerens navn

### kategorier
Definerer ulike områder i hjemmet (f.eks. kjøkken, stue).
- id (PK): Unik identifikator
- navn: Navn på kategorien

### oppgaver
Fungerer som mal for ulike gjøremål.
- id (PK): Unik identifikator
- tittel: Navn på oppgaven
- poeng: Poengverdi ved fullføring
- kategori_id (FK): Kobling til kategori

### tildelinger
Sentral koblingstabell som administrerer oppgaver.
- id (PK): Unik identifikator
- bruker_id (FK): Referanse til bruker
- oppgave_id (FK): Referanse til oppgave
- status: Status på oppgaven (pending eller done)

---

## 2.2 Relasjoner og normaliseringsvalg

### Mange-til-mange (M:N)
En bruker kan utføre mange oppgaver, og en oppgave kan tildeles mange brukere.  
Dette løses via tabellen tildelinger, som fungerer som koblingstabell.

### Tredje normalform (3NF)
Kategorier er skilt ut i egen tabell for å unngå duplisering.  
Dette sikrer at kategori-data kun lagres ett sted, og kan endres uten å påvirke oppgaver direkte.

### Referensiell integritet
Fremmednøkler (FK) sikrer at en tildeling ikke kan referere til ikke-eksisterende brukere eller oppgaver.

---

# 3. API-endepunkter (Routes)

Backend fungerer som et RESTful API med følgende endepunkter:

| Metode | Endepunkt | Beskrivelse |
|--------|----------|-------------|
| GET | /api/meta | Henter metadata (brukere og oppgaver) |
| GET | /api/tasks | Henter alle tildelte oppgaver (med JOIN) |
| POST | /api/tasks | Oppretter ny oppgave-tildeling |
| PATCH | /api/tasks/:id/status | Oppdaterer status (pending / done) |
| DELETE | /api/tasks/:id | Sletter en tildeling |
| GET | /api/ranking | Beregner poengsum per bruker |

---

# 4. Brukeropplevelse og universell utforming (UU)

## Responsivt design
Bruk av CSS Flexbox og Media Queries gjør at grensesnittet tilpasser seg PC, nettbrett og mobil.

## Semantisk HTML
Bruk av elementer som <main>, <section>, <ul> og <button> gir god struktur og støtte for skjermlesere.

## Interaktivitet
Brukeren får umiddelbar visuell respons ved fullføring av oppgaver (f.eks. gjennomstreking og nedtoning).  
Poengoversikten oppdateres automatisk.

---

# 5. Sikkerhetstiltak

## SQL Injection-beskyttelse
Alle databaseforespørsler bruker parametriserte spørringer (?) for å hindre SQL-injection.

## Feilhåndtering
Serveren bruker try-catch for å håndtere feil og returnerer korrekte HTTP-statuskoder (f.eks. 500 ved serverfeil).

---

Dato: 10. april 2026  
Utviklet av: Yeva Malyshko
