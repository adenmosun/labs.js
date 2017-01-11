'use strict'


  Array.prototype.toTwenty = function() {
  var oneToTwenty = [];
  for (var i = 1; i <= 20; i++) {
      oneToTwenty.push(i);
}
  return oneToTwenty;
}
  Array.prototype.toForty = function() {
  var twoToForty = [];
  for (var i = 2; i <= 40; i += 2) {
      twoToForty.push(i);
}
  return twoToForty;
}
  Array.prototype.toOneThousand = function() {
  var tenToOneThousand = [];
  for (var i = 10; i <= 1000; i += 10) {
      tenToOneThousand.push(i);
}
  return tenToOneThousand;
 }       
Array.prototype.search = function (num) {
 
  
  var minIndex = 0;
  var maxIndex = this.length - 1;
  var midIndex;
  var search = {count: 0, index: -1, length: this.length };
 
    while (minIndex <= maxIndex) {
    	  midIndex = Math.floor((minIndex + maxIndex) / 2);
     if (this[maxIndex] === num || this[minIndex] === num) {
       if (this[maxIndex] === num) { search.index = maxIndex;
       }
       else { search.index = minIndex;
       }
       return search;
    }
      
        if (this[midIndex] < num) { minIndex = midIndex + 1; maxIndex--;
        }
        else if (this[midIndex] > num) { maxIndex = midIndex - 1; minIndex++;
        }
        else { search.index = midIndex; return search;
        }
        search.count++;
    }
 
   return search;
};
