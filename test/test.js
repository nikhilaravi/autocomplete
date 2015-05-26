var assert= require('assert'); //assigning one of the core node modules to assert
var ac = require('../index.js'); // './' means the file is current working directory (self reference),
//  requiring a .js or .json file - don't need the extension
// also if you put (../) this will work - calls the index file in the parent directory.
// '../' means the file is in the parent directory.

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');


ac.import(function (words) {
  console.log("words.txt had " + words.length + " words in it!");
  assert.equal(words.length, 354987);
});


console.log('# check if callback is a function');
var error = ac.import('string');
assert.equal(error.message, 'callback argument MUST be a function');

console.log('# ac.findWord finds a string in a words array');
ac.import(function() {
  ac.findWord('nik', function(err, found) {
    assert.equal(err,null);
  });
});
