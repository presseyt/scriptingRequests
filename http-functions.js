

var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function(res){
    //console.log(res.statusCode);   //200 OK

    res.setEncoding('utf8');

    var rawData = '';

    res.on('data', function(chunk){
      rawData += chunk;
    });

    res.on('end', function(){
      callback(rawData);
    });

  });

};


