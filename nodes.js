const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var SaveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title : title, // {} represent the json
    body
  };

  var duplicateNotes = notes.filter((note)=> note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    SaveNotes(notes);
    return note;
  };
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var removingNotes = notes.filter((note)=> note.title !== title);
  SaveNotes(removingNotes);

  return notes.length !== removingNotes.length;
};

var logNote = (note) => {
  console.log('---')
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
