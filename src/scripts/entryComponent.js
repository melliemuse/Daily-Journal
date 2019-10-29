const makeJournalEntryComponent = (entry) => {
    // Create your own HTML structure for a journal entry
    return `
    <h1>${entry.concepts}</h1>
    <h3>${entry.date}</h3>
    <p>${entry.contents}</p>
    <p>Mood: ${entry.mood}</p>
    `
}