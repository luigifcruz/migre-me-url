'use strict';

var request = require("request"),
   http = require("http");



function shorten(url, callback) {
   http.get("http://migre.me/api.json?url=" + url, function (res) {
      var body = '';
      res.on('data', function(chunk) {
         body += chunk;
      });
      res.on('end', function() {
         var json = JSON.parse(body);
         if (json.info == "OK") {
            process.nextTick(function(){
               callback(null, json.migre);
            });
         } else {
            process.nextTick(function(){
               callback(new Error(json.info), null);
            });
            return;
         }
      });
   }).on('error', function(e) {
      process.nextTick(function(){
         callback(new Error("Error to reach migre.me servers."), null);
      });
      return;
   });
}

module.exports = {
  shorten: shorten
};
