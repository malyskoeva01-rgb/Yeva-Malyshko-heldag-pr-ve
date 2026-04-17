# GDPR og Etikk: Familieoppgave-manager

Dette dokumentet beskriver hvordan applikasjonen håndterer personvern og etiske hensyn i tråd med EUs personvernforordning (GDPR) og prinsipper for ansvarlig programvareutvikling.

---

# 1. Personvern og GDPR

Selv om denne applikasjonen er beregnet for privat bruk i en familie, er den utviklet med "Privacy by Design" (innebygd personvern) som grunnprinsipp.

---

## 1.1 Dataminimering

I samsvar med GDPR-prinsippet om dataminimering samler applikasjonen kun inn de nødvendige opplysningene for at systemet skal fungere:

- Navn: for å tildele oppgaver og vise poengoversikt  
- Oppgaveinformasjon: for å administrere gjøremål  
- Status: for å beregne poengsummer  

Applikasjonen samler ikke inn sensitive personopplysninger som:
- e-post
- passord
- lokasjon
- alder
- telefonnummer

---

## 1.2 Formålsbegrensning

Data som lagres i family.db brukes utelukkende til:

- organisering av husarbeid  
- intern rangering  

 Ingen data blir:
- solgt  
- delt med tredjeparter  
- brukt til sporing eller profilering  

---

## 1.3 Retten til sletting ("The Right to be Forgotten")

Brukere har full kontroll over sine data:

- Alle tildelte oppgaver kan slettes permanent via 🗑-ikonet  
- Siden systemet er lokalt (SQLite), kan hele databasen slettes av administrator ved behov  

---

# 2. Etiske vurderinger

## 2.1 Gamification og motivasjon

Applikasjonen bruker poeng og rangering (gamification) for å motivere til husarbeid.

Dette er etisk designet for:
- positiv forsterkning  
- samarbeid i familien  

 Systemet skal brukes som et samarbeidsverktøy, ikke som press eller kontroll.

---

## 2.2 Inkludering og tilgjengelighet

Etisk programvareutvikling innebærer at alle skal kunne bruke systemet:

- Universell utforming: semantisk HTML og god kontrast for brukere med nedsatt syn eller skjermleser  
- Enkelhet: minimalistisk brukergrensesnitt for å redusere kognitiv belastning  

Dette gjør applikasjonen egnet for både barn og eldre.

---

## 2.3 Datasikkerhet

Selv om dataene ikke er sensitive, er sikkerhet viktig:

- bruk av parametriserte SQL-spørringer (?)  
- beskyttelse mot SQL-injeksjon  
- sikring av databasens integritet  

---

# 3. Oppsummering

Familieoppgave-manager følger prinsippet om personvern som standard.

Ved å begrense datainnsamling, sikre transparens og fokusere på brukervennlighet, skapes en trygg og etisk plattform for koordinering av felles ansvar.

---

**Dato:** 10. april 2026  
**Ansvarlig utvikler:** Yeva Malyshko
