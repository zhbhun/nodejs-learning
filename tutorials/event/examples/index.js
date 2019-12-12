const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', function() { 
  console.log('some_event 事件触发'); 
});

setTimeout(function() { 
  eventEmitter.emit('some_event'); 
}, 1000); 