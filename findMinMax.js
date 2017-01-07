'use strict'
var file = {}


    file.findMinMax = function (arr) {
	// TODO
		var Min = Math.min.apply(null, arr);
		var Max = Math.max.apply(null, arr);
		var MinMax = [Min,Max]
		var	equal = []
		
		for(var i = 0; i < arr.length; i++){
			if(arr[i] == arr[i+1]){
				 equal.push(arr[i])
				return equal
			}
			else return MinMax
		}
	}

module.exports = file;
