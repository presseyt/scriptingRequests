
var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var print_UPPERCASE = function(html){
  console.log(html.toUpperCase());
};

getHTML(requestOptions, print_UPPERCASE);

