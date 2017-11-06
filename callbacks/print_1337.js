
var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

var print_1337 = function(html){
  html = html.replace(/er/ig, '0r').replace(/ck/ig,'x').replace(/you/ig, 'j00');
  html = html.replace(/a/gi,'4').replace(/e/gi, '3').replace(/l/gi, '1').replace(/o/gi,'0').replace(/s/gi,'5').replace(/t/gi,'7');
  console.log(html);
};

getHTML(requestOptions, print_1337);

