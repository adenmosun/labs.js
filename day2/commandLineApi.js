'use strict'
 var request = require("request");
 request({
    uri: "https://api.pinterest.com/v3/pidgets/boards/highquality/travel/pins/",
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 5 }, 
 
  function(error, response, body) {;
   if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
     console.log(info);
   if (error)
     console.log('error');
}
});
