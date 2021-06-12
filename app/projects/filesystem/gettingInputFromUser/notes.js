const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // const duplicatesNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    //     return note.title === title
    // })
    
    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green(chalk.green.inverse('New note added!')))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
const removeNotes = (title) => {
    // console.log(title);
    const notes = loadNotes()
    return notes.filter((note) => note.title !== title)
    // return note.title !== title

    // })
    if (notes.length > noteKeep.length) {
        console.log(chalk.green.inverse('Note removed ...'));
        saveNotes(noteKeep)
    } else {
        console.log(chalk.red.inverse('No note found ....'));
    }

}
const listNote = () => {

    const notes = loadNotes()
    console.log(chalk.inverse('Your notes ..!'));

    notes.forEach((note) => {
        console.log(note.title);
    })

}
const readNote = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)



    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('note not found '));
    }

}




const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {

        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNote: listNote,
    readNote: readNote
}