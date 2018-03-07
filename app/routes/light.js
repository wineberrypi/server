'use strict';

module.exports = {

  'get /light/:id/on': {
    action: 'on'
  },

  'get /light/:id/off': {
    action: 'off'
  },

  'get /light/:id/toggle': {
    action: 'toggle'
  },

  'get /light/:id/status': {
    action: 'getStatus'
  }
};
