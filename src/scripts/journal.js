fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json)  // Parse as JSON
    .then(parsedEntries => {
        // console.log(parsedEntries)
        // addJournalEntriesToDOM(parsedEntries)
    })

const makeJournalEntryComponent = (entry) => {
    // Create your own HTML structure for a journal entry
    return `
    <h1>${entry.concepts}</h1>
    <h3>${entry.date}</h3>
    <p>${entry.contents}</p>
    <p>Mood: ${entry.mood}</p>
    `
}

const entryContainer = document.querySelector('.entryLog')

const addJournalEntriesToDOM = (entries) => {
    entries.forEach(function(entry) {
    entryContainer.innerHTML += makeJournalEntryComponent(entry)
    });
}

