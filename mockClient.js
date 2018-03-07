'use strict';

const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://127.0.0.1');

const topic = 'light';

client.on('connect', () => {
  client.subscribe(topic);
  client.publish(topic, 'Hello mqtt');
});

client.on('message', (topic, message) => {
  // message is Buffer
  console.log(topic + ': ' +  message.toString());
});
