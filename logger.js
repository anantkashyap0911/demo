const EventEmitter = require('events'); 
const emitter = new EventEmitter();

/*console.log(__filename);
console.log(__dirname);*/

var url="http://mylogger.io/log";
class Logger extends EventEmitter{
    log(message){
        //send an HTTP message

        console.log(message);

        //raise an event. Sequence is important
        this.emit('messageLogged',{id:1, url:"http://"});
    }
}

module.exports=Logger;