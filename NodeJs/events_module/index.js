const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyNAme',()=> console.log('My first name is nikhil.') );
event.on('sayMyNAme',()=> console.log('My middle name is Ashok.') );
event.on('sayMyNAme',()=> console.log('My last name is punse.') );

event.emit('sayMyNAme');

event.on('checkpage',(sc,status)=>{
    console.log(`Page status code is ${sc} and page status is ${status}.`)
})

event.emit('checkpage',200,'OK');