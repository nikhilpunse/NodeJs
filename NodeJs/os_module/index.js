const os = require('os');

console.log(os.arch());
const memory = os.freemem();
console.log(`Free memory in os is ${memory/1024/1024/1024} GB.`);
console.log(`total memory in os is ${os.totalmem()/1024/1024/1024} GB.`);
console.log(os.type());
console.log(os.platform());
console.log(os.hostname());
