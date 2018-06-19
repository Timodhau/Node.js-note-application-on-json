console.log('starting node.js')

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
} catch (e) {

}

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('getting note', title);
};

var removeNote = (title) => {
  console.log('remove note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
