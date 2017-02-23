const fs      = require('fs');
const intents = {};

module.exports = function (params, callback)
{
  let request = params.kwargs.request || {};
  let name, slots;

  if (!request.intent && params.args[0]) {
    request.intent = {
      name: params.args[0],
      slots: Object.keys(params.kwargs).reduce((slots, key) =>
      {
        slots[key] = {
          name: key,
          value: params.kwargs[key]
        };

        return slots;
      }, {})
    };
  }

  name  = (request && request.intent && request.intent.name) || 'LaunchIntent';
  slots = (request && request.intent && request.intent.slots) || {};

  if (!(name + '').match(/^[A-Z0-9-]*$/i)) {
    return callback(null, 'Goodbye', true);
  }

  if (!intents[name] && !fs.existsSync(`./alexa/intents/${name}.js`)) {
    return callback(new Error(`Could not find intent: ${name}`));
  }

  try {
    intents[name] = intents[name] || require(`./intents/${name}.js`);
  } catch (e) {
    return callback(new Error(`Could not load intent: ${name}`));
  }

  return intents[name](slots, callback);
};
