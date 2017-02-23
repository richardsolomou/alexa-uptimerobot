const client      = require('../uptimerobot/client');
const checkStatus = require('../uptimerobot/check-status');

module.exports = function (slots, callback)
{
  let targetMonitor, promise;

  if (slots.monitor && slots.monitor.value) {
    targetMonitor = slots.monitor.value;
  }

  promise = client();

  promise.then((monitors) =>
  {
    let length = monitors.length;
    let monitor, response;

    while (length) {
      monitor = monitors[--length];

      if (targetMonitor.toLowerCase() === monitor.friendlyname.toLowerCase()) {
        response = checkStatus(monitor.friendlyname, monitor.status);

        return callback(null, response);
      }
    }

    return callback(null, 'I couldn\'t find a monitor by that name. Which monitor should I check the status for?', true);
  });
};
