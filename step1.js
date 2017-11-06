

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');

  https.get(requestOptions, function(res){
    //console.log(res.statusCode);   //200 OK

    res.setEncoding('utf8');

    var rawData = '';

    res.on('data', function(chunk){
      console.log(chunk + '\n');
    });

  });

}


(function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');

  https.get(requestOptions, function(res){
    //console.log(res.statusCode);   //200 OK

    res.setEncoding('utf8');

    var rawData = '';

    res.on('data', function(chunk){
      rawData += chunk;
    });

    res.on('end', function(){
      console.log(rawData);
    });

  });

})();







