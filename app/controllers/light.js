'use strict';

const topic = '/lights';

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

    const id = ctx.params.id;

    // if(!id){ //if not valid id
    //   ctx.badRequest({
    //     message: 'Please provide a valid id.'
    //   })
    // }

    const payload = {
      id,
      action: 'off'
    };

    mqtt.publish(null, topic, payload);

    ctx.ok({
      message: 'Turned off.'
    });
  },

  async on (ctx){

    const id = ctx.params.id;

    // if(!id){ //if not valid id
    //   ctx.badRequest({
    //     message: 'Please provide a valid id.'
    //   })
    // }

    const payload = {
      id,
      action: 'on'
    };

    mqtt.publish(null, topic, payload);

    ctx.ok({
      message: 'Turned on.'
    });
  },

  async toggle (ctx){

    const id = ctx.params.id;

    // if(!id){ //if not valid id
    //   ctx.badRequest({
    //     message: 'Please provide a valid id.'
    //   })
    // }

    const payload = {
      id,
      action: 'toggle'
    };

    mqtt.publish(null, topic, payload);

    ctx.ok({
      message: 'Lights toggled.'
    });
  },

  async getStatus (ctx){

    // const id = ctx.params.id;

    // if(!id){ //if not valid id
    //   ctx.badRequest({
    //     message: 'Please provide a valid id.'
    //   })
    // }

    ctx.ok({
      message: 'Status of light',
      status: ''
    });
  }

});
