var fs = require('fs'); // import the file system module and assign it to a variable

var ac = {};

ac.import = function (callback) {
  var filename = __dirname + "/words.txt";
  if (!callback || typeof callback !== 'function') {
    return new Error('callback argument MUST be a function');
  } //return the error before the asynchronous fs function gets called
  fs.readFile(filename, 'utf8',function (err, data) {
    if (err) {
      console.log(err);
    }
    ac.words = data.split('\n');
    return callback(ac.words);
  });
};
//assign the import function to a property of the ac object so we can use it later
// data is the data that is read from the filename and data is passed to the callback
//the callback is the second parameter in the fs.readFile function call - essentially a continuation function
// pass in the encoding method 'utf8' as a parameter to the readFile method.
// callback is always the last parameter.
// fs function runs asynchronously

ac.findWord = function(word, callback) {
  var found = [];
  for (var i=0; i<ac.words.length; i++) {
    if (ac.words[i].search(word) === 0) {  //search returns the index of the match within the word.
      found.push(ac.words[i]);
    }
  }
  console.log(found);
  return callback(null, found);
};

module.exports = ac; //node will export the ac object so we can use it in the test
