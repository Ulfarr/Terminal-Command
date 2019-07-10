const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.closeSync(fs.openSync(filename, 'a'));
};

module.exports.mkdir = () => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
    console.log('Directory created');
  } else {
    console.log('Directory already exists');
  }
};