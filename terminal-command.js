const fs = require('fs');
const filename = 'newTextFile.txt';
const directory = './path/';

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('terminal-command.txt', 'touchie touchie!', 'utf8', (err) => {
    if (err) throw err;

    console.log('success')
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./test', (err) => {
    if (err) throw err;

    console.log('sucess')
  });
};