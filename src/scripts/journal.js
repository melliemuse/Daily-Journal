// Define the keys and value for a JavaScript object that
// represents a journal entry about what you learned today
//

console.log('You linked it! Good job!')

const journalEntries = [
    {
    date: '10/18/2019',
    concepts: 'Project 2 prep, Modular Coding, Pulling everything from book 2 together',
    contents: 'Broke down how to create a functional search form that returns results from an external api using modular code', 
    mood: 'pretty good',
},
 {
    date: '10/17/2019',
    concepts: 'Lab Day, APIs, Event Handlers, Vocab',
    contents: 'Project 2 prep, Modular Coding, Pulling everything from book 2 together',
    contents: 'Broke down how to create a functional search form that returns results from an external api using modular code', 
    mood: 'kinda rough',
},
{
    date: '10/16/2019',
    concepts: 'Event Handlers',
    contents: '',
    mood: 'good',
}
]

// const journalEntry = {
//     date: `${date}`,
//     concepts: `${concepts}`,
//     contents: `${contents}`, 
//     mood: `${mood}`,
// }
// debugger
// let journalEntries = []
// journalEntries.push(journalEntry, journalEntry2, journalEntry3)

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <h1>${journalEntry.concepts}</h1>
    <h3>${journalEntry.date}</h3>
    <p>${journalEntry.contents}</p>
    <p>Mood: ${journalEntry.mood}</p>
    `
}

const entryContainer = document.querySelector('.entryLog')

const addJournalEntriesToDOM = (journalEntries) => {
    journalEntries.forEach(journalEntry => {
    entryContainer.innerHTML += makeJournalEntryComponent(journalEntry)
    });
}

addJournalEntriesToDOM(journalEntries)