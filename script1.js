function saveEntry() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const weather = document.getElementById('weather').value;
    const entry = document.getElementById('journal').value;

    const journalEntry = {
        date: date,
        time: time,
        weather: weather,
        entry: entry
    };

    let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.push(journalEntry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));

    displayEntries();
    document.getElementById('journal').value = '';
}

function displayEntries() {
    const entriesDiv = document.getElementById('entries');
    entriesDiv.innerHTML = '';

    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';

        const dateTime = `${entry.date} - ${entry.time}`;
        const weather = `Weather: ${entry.weather}`;
        const journalEntry = `<p>${entry.entry}</p>`;

        entryDiv.innerHTML = `<h3>${dateTime}</h3><p>${weather}</p>${journalEntry}`;
        entriesDiv.appendChild(entryDiv);
    });
}

function toggleEntries() {
    const entriesDiv = document.getElementById('entries');
    entriesDiv.style.display = entriesDiv.style.display === 'none' ? 'block' : 'none';
}

displayEntries();