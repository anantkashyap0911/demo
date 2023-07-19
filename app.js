/*function sayHello(name){
    console.log('Hello '+ name);
}
sayHello('Anant');*/ //FOr priniting on console


/*const log= require('./logger')
//console.log(logger);
log('message');*/ // for implementing logger.js

/*const path = require('path');
var pathObj= path.parse(__filename);
console.log(pathObj);*/ 

/*const os = require('os');
var totalMemory=os.totalmem();
var freeMemory=os.freemem();
console.log('Total Memory is: '+totalMemory);
console.log(`Free Memory is: ${freeMemory}`);*/

/*const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);  //Synchronous files

fs.readdir('./', function(err,files){
    if(err)
        console.log('Error',err);
    else
        console.log('Result',files)
});*/

/*const EventEmitter = require('events'); //capital letter indicates its a class

const Logger = require('./logger');
const logger = new Logger();

//register a listener
logger.on('messageLogged',(arg) => {
    console.log("Listener Called",arg);
});

logger.log('message');*/

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
console.log("listening to port 3000");
