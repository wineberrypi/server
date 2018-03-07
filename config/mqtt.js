'use strict';

const redis = require('redis');
const mosca = require('mosca');

module.exports = {
  moscoa: {
    port: 1883,
    backend: {
      type: 'redis',
      redis,
      db: 12,
      port: 6379,
      return_buffers: true, // to handle binary payloads
      host: 'localhost'
    },
    persistence: {
      factory: mosca.persistence.Redis
    },
    http: {
      port: 3000,
      bundle: true,
      static: './'
    }
  }
};
