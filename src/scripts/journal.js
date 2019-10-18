// Define the keys and value for a JavaScript object that
// represents a journal entry about what you learned today
//

console.log('You linked it! Good job!')

const journalEntry = {
    date: '10/18/2019',
    concepts: 'Project 2 prep, Modular Coding, Pulling everything from book 2 together',
    contents: 'Broke down how to create a fucntional search form that returns results from an external api using modular code', 
    mood: 'pretty good',
}

const journalEntry2 = {
    date: '10/17/2019',
    concepts: 'Lab Day, APIs, Event Handlers, Vocab',
    contents: 'Project 2 prep, Modular Coding, Pulling everything from book 2 together',
    contents: 'Broke down how to create a fucntional search form that returns results from an external api using modular code', 
    mood: 'kinda rough',
}

const journalEntry3 = {
    date: '10/16/2019',
    concepts: 'Event Handlers',
    contents: '',
    mood: 'good',
}

// const journalEntry = {
//     date: `${date}`,
//     concepts: `${concepts}`,
//     contents: `${contents}`, 
//     mood: `${mood}`,
// }
debugger
let journalEntries = []
journalEntries.push(journalEntry, journalEntry2, journalEntry3)
console.log(journalEntries)