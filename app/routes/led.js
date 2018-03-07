'use strict';

module.exports = {

  'get /led/on': {
    action: 'on'
  },

  'get /led/off': {
    action: 'off'
  },

  'get /led/color/:color': {
    action: 'setColor'
  },

  'get /led/fade': {
    action: 'fade'
  }
};
