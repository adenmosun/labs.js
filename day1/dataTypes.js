'use strict'
var file = {}

file.dataTypes = function (data) {
  if (data === null || data === undefined) 
    return 'no value';
  if (typeof (data) === "boolean")
    return data;
  if (typeof (data) === "number" && data < 100)
    return 'less than 100';
  if (typeof (data) === "number" && data > 100)
    return 'more than 100';
  if (typeof (data) === "number" && data === 100)
    return 'equal to 100';
  if (typeof (data) === "string")
    return data.length;
  if (data.constructor === Array && data.length > 2)
    return data[2];
  if (typeof (data) === "function")
    return data(true);
}



module.exports = file;
