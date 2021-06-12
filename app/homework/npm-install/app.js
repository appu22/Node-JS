const chalk = require('chalk')
const  validator =  require('validator')
console.log('added validator');

console.log(validator.isEmail('appgmail.com'));

console.log(validator.isURL('https://github.com'));//using validator

console.log(chalk.white.bold.italic.inverse('appu'));//using chalk
console.log(chalk.italic('idexcel'));
console.log('added nodemon');//added nodemon command  npm install -g nodemon@2.07
