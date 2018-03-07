'use strict';

const topic = '/led';

/*
 * Payload.
 * {
 *  'id': '1',
 *  'action': 'on'
 *  }
 *
 */

module.exports = ({ mqtt }) => ({

  async off (ctx){

    const payload = {
      action: 'off'
    };

    mqtt.publish(null, topic, payload);

    ctx.ok({
      message: 'Turned off.'
    });
  },

  async on (ctx){

    const payload = {
      action: 'on'
    };

    mqtt.publish(null, topic, payload);

    ctx.ok({
      message: 'Turned on.'
    });
  },

  async fade (ctx){

    const payload = {
      action: 'fade'
    };

    mqtt.publish(null, topic, payload);

    ctx.ok({
      message: 'Fade Turned on.'
    });
  },

  async setColor (ctx){

    let ledColor;

    const color = ctx.params.color;

    if(color == 'red'){
      ledColor = '255,0,0';
    } else if(color == 'green'){
      ledColor = '0,255,0';
    } else if(color == 'blue'){
      ledColor = '0,0,255';
    } else {
      ledColor = color;
    }

    const payload = {
      action: 'color',
      color: ledColor
    };

    mqtt.publish(null, topic, payload);

    ctx.ok({
      message: 'Changed color'
    });
  }


});
