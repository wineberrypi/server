'use strict';

const { Server } = require('mosca');
let mqttInstance;

class Mqtt{
  constructor (config){
    this.server = new Server(config);
    this.server.on('ready', this.setup.bind(this));
    this.server.on('clientConnected', this.clientConnected.bind(this));
    this.server.on('published', this.published.bind(this));
    this.handlers = {};
  }

  setup (){
    console.log('Mosca server is up and running');
    this.server.authenticate = this.authenticate;
    this.server.authorizePublish = this.authorizePublish;
    this.server.authorizeSubscribe = this.authorizeSubscribe;
  }

  clientConnected (client){
    console.log('client connected', client.id);
  }

  publish (userId, topic, payload){
    // if(!userId || !payload){
    if (!payload){
      return false;
    }

    // var topic = 'topic';  //Maybe decide topic depending on userid

    if ('object' === typeof payload){
      payload = JSON.stringify(payload);
    }

    const message = {
      topic: topic,
      payload: payload,
      qos: 0,
      retain: false
    };

    console.log(topic);

    this.server.publish(message, () => {
      console.log('Publised a message!');
    });
  }

  published (packet, client){
    if (client){
      // Will be true if message came from client
      console.log('Client Published');
      const topic = packet.topic;

      const handler = this.handlers[topic];

      handler && handler(packet);
    }
    // Do stuff for recieved message read it, use it......
  }

  subscribe (topic, handler){
    if (topic && handler){
      this.handlers[topic] = handler;
    }
  }

  authenticate (client, username, password, callback) {
    const authenticated = true;
    // Check username password, authenticate
    if (authenticated){     // If authenticated
      callback(null, true);
    } else {
      callback(null, null);
    }
  }

  authorizePublish (client, topic, payload, callback){
    // Check if client is authorized to publish to the topic
    const authorized = true;
    callback(null, authorized);
  }

  authorizeSubscribe (client, topic, callback){
    // Check if client is authorized to subscribe to the topic
    const authorized = true;
    callback(null, authorized);
  }

}


module.exports = ({ config }) => {

  if (!mqttInstance){
    mqttInstance = new Mqtt(config.mqtt);
  }

  return mqttInstance;
};
