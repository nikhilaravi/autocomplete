var fs = require('fs'); // import the file system module and assign it to a variable

var ac = {};

ac.import = function (callback) {
  var filename = __dirname + "/words.txt";
  fs.readFile(filename, 'utf8',function (err, data) {
    if (err) {
      console.log(err);
    }
    ac.words = data.split('\n');
    callback(ac.words);
  });
};
//assign the import function to a property of the ac object so we can use it later
// data is the data that is read from the filename and data is passed to the callback
//the callback is the second parameter in the fs.readFile function call - essentially a continuation function
// pass in the encoding method 'utf8' as a parameter to the readFile method.
module.exports = ac; //node will export the ac object so we can use it in the test
