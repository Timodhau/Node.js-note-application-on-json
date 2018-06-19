console.log('starting');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./nodes.js')

var argv = yargs.argv;
var command = yargs.argv._[0];
console.log('command', command);
console.log('argv', argv);

if (command === 'remove'){
  notes.removeNote(argv.title);
} else if (command === 'add'){
  console.log('adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.getNote(argv.title);
} else{
  console.log('not recognize')
}
