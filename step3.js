

 function getAndPrintHTML (options) {

  var https = require('https');

  https.get(options, function(res){
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

}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

