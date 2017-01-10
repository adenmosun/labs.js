 'use strict'
var file = {}


file.reverseString = function (string) {

var revString = '';
  if (string.length === 0) return null;
  for (var i = string.length - 1; i >= 0; i--) {
    revString += string[i]
      if (string === revString) return true;
  }
  return revString;
}

    

module.exports = file;