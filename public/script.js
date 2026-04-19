const listeDiv = document.getElementById("liste");


async function start() {
    const res = await fetch("/api/meta");
    const data = await res.json();

    let brukerHtml = "";
    for (let i = 0; i < data.users.length; i++) {
        brukerHtml += `<option value="${data.users[i].id}">${data.users[i].navn}</option>`;
    }
    document.getElementById("brukerValg").innerHTML = brukerHtml;

    let oppgaveHtml = "";
    for (let i = 0; i < data.tasks.length; i++) {
        oppgaveHtml += `<option value="${data.tasks[i].id}">${data.tasks[i].tittel}</option>`;
    }
    document.getElementById("oppgaveValg").innerHTML = oppgaveHtml;

    visOppgaver();
}


async function visOppgaver() {
    const res = await fetch("/api/tasks");
    const oppgaver = await res.json();

    let html = "";

    for (let i = 0; i < oppgaver.length; i++) {
        html += `
            <div class="kort">
                <span><b>${oppgaver[i].userName}</b>: ${oppgaver[i].taskTitle} (+${oppgaver[i].points}p)</span>
                <button onclick="slett(${oppgaver[i].id})" class="slett-knapp">🗑️</button>
            </div>
        `;
    }

    listeDiv.innerHTML = html;
}
