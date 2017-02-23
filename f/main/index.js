const respond = require('../../alexa/respond.js');
const router  = require('../../alexa/router.js');

module.exports = (params, callback) =>
{
  router(params, (err, result, ask) =>
  {
    ask = ask || false;

    if (err) {
      return respond.tell('Error: ' + err.message, callback);
    }

    if (ask) {
      return respond.ask(result, callback);
    }

    return respond.tell(result, callback);
  });
};
