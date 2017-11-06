
var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var print_lowercase = function(html){
  console.log(html.toLowerCase());
};

getHTML(requestOptions, print_lowercase);

