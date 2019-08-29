// Worker creates a separate thread, which can be listened to by listening for messages

// This kind of thing is taken care of for you in the browser by the Web API and callback queue system, Node uses worker threads in the background

var worker = new Worker('worker.js');
worker.postMessage('Hello!');

addEventListener('message', console.log('message received!'));

// Node threads

const {spawn} = require('child_process');

spawn('git', ['stuff']);

