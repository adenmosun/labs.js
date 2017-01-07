'use strict'
var file = {}
var minMax = function (numbers) {
  var minimax = [];
  var min = 0;
  var minMax = 0;
  for (var i = 1; i = numbers.length; i++) 
{
  if (i > max)
   i = max;
}
{
  else if (i < min)
  i = min;
}
 return minmax.push(min, max);
};

console.log(minmax([2,5,7,9,4]));

file.computeAverage = function(num1,num2,num3) {
   var average = 0;
   average = (num1+num2+num3)/3
   return average;
 }
 file.computeFactorial = function(num) {
   var factorial = 1;
   for (var i = 1; i<= num; i++) {
    factorial = factorial * i;
   }
   return factorial;

 }
  file.convertTempCtoF = function(cTemp) {
   var fTemp = 0;
   fTemp = (cTemp * 9/5) + 32 
   return fTemp;
 }
  file.convertTempFtoC = function(fTemp) {
   var cTemp = 0;
   cTemp = (fTemp - 32) * 5/9
   return cTemp;
 }
 module.exports = file;