
var path = require('path');

function getExtensionFilename(filename) {
	var result = path.extname(filename);
	return result;
}

console.log(getExtensionFilename('01.txt'));