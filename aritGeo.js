'use strict'
var file = {}


file.aritGeo = function (arr) {
        //TODO
     var diff = arr[1] - arr[0];
     var div = arr[1] / arr[0];
     var arithmetic = true;
     var geometric = true;
     var len = arr.length;
     for(var i = 0; i < len - 1; i++)
{
        if( arr[i + 1] - arr[i] !== diff ) arithmetic = false;
        if(arr[i + 1] / arr[i] !== div) geometric = false;
}
    if(arithmetic === true) 
      return "Arithmetic";
    else if(geometric === true)
      return "Geometric";
    else if (geometric !== true && arithmetic !== true)
      return -1;
}


module.exports = file;
