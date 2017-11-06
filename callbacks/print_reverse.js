
var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var print_UPPERCASE = function(html){
  console.log(html.split('').reverse().join(''));
};

getHTML(requestOptions, print_UPPERCASE);

