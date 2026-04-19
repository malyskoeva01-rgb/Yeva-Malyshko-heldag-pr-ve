const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('./database/family.db');

app.use(express.json());
app.use(express.static('public'));

// Hent brukere og oppgavetyper
app.get('/api/meta', (req, res) => {
    db.all("SELECT id, navn FROM brukere", (err, users) => {
        db.all("SELECT id, tittel FROM oppgaver", (err, tasks) => {
            res.json({ users, tasks });
        });
    });
});

// Hent den aktive listen
app.get('/api/tasks', (req, res) => {
    const sql = "SELECT t.id, b.navn as userName, o.tittel as taskTitle, o.poeng as points FROM tildelinger t JOIN brukere b ON t.bruker_id = b.id JOIN oppgaver o ON t.oppgave_id = o.id";
    db.all(sql, (err, rows) => res.json(rows));
});

// Lagre i databasen
app.post('/api/tasks', (req, res) => {
    db.run("INSERT INTO tildelinger (bruker_id, oppgave_id) VALUES (?, ?)", [req.body.bruker_id, req.body.oppgave_id], () => res.send());
});

// Slett fra databasen
app.delete('/api/tasks/:id', (req, res) => {
    db.run("DELETE FROM tildelinger WHERE id = ?", req.params.id, () => res.send());
});

app.listen(3000, () => console.log('🚀 Server: http://localhost:3000'));
