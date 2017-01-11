'use strict'
var file = {}


file.findMissing = function (arr1, arr2) {
  var sum = function(array){
    var sumArray = 0;
       for(var i = 0; i < array.length; i++){ sumArray += array[i];
       }
       return sumArray;
		}
          var array1 = sum(arr1);
          var array2 = sum(arr2);

         if (array1 === array2) { return 0;
         } else {
         return array2 - array1;
     }
 }
    

module.exports = file;
