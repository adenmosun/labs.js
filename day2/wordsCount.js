'use strict'
var file = {}


file.words = function (sentence) {
  var word = sentence.split(/\s+/g);
  var expectedCounts = {};
    for(var i = 0; i < word.length; i++) {
      expectedCounts[word[i]] = expectedCounts.hasOwnProperty([word[i]]) ? expectedCounts[word[i]] + 1 : 1;
}
    return expectedCounts;
}

module.exports = file;