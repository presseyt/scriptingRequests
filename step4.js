

 function getHTML (options, callback) {

  var https = require('https');

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

}

function printHTML(html){
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

