const chalk = require('chalk')
const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
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
const removeNotes = function (title) {
    // console.log(title);
    const notes = loadNotes()
    const noteKeep = notes.filter(function (note) {
        return note.title !== title

    })
    if (notes.length > noteKeep.length) {
        console.log(chalk.green.inverse('Note removed ...'));
        saveNotes(noteKeep)
    }else{
        console.log(chalk.red.inverse('No note found ....'));
    }
   
}
const listNote = function () {


}





const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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
    listNote: listNote
}