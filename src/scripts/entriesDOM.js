


const addJournalEntriesToDOM = (entries) => {
    const entryContainer = document.querySelector('.entryLog')
    entries.forEach(function(entry) {
    entryContainer.innerHTML += makeJournalEntryComponent(entry)
    });
}
