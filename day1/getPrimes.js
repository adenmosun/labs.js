'use strict'
var file = {}

file.getPrimes = function (num) {
 var isPrime = [];
 var count = 0;

  for(var j = 1; j <= num ; j++){      //n
    for(var i = 1; i <= j; i++){      //n
      if( j % i === 0){ count++; 
        // for every number within the range of the current loop of j from 1 to num it is prime only if 1 and num can be divided without a remainder
}
}
         if(count === 2){ isPrime.push(j); 
        // prime numbers should only be divided by 1 and itself which makes it the count (2)
}
   count = 0;
}
return isPrime;
}// Asymptotic analysis is n^2 because of the nested loops i.e.  O(n^2)


module.exports = file;
