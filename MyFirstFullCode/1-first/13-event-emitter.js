const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log(`data recieved`);
})

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
  console.log("Logic other there");
})
customEmitter.emit('response', 'jhon', 34);