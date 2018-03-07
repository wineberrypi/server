'use strict';

const redis = require('redis');


module.exports = ({ config }) => {
  const client = redis.createClient(config.redis);
  return client;
};
