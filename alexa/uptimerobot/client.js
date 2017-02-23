const uptimeRobot = require('uptime-robot');
let client;

if (!process.env.uptimerobot_key) {
  console.log('#\r\n# Failed to find uptimerobot key in `env.json`\r\n#');
}

client = new uptimeRobot(process.env.uptimerobot_key);

module.exports = function ()
{
  return new Promise(function (resolve)
  {
    client.getMonitors(function (err, res)
    {
      if (err) {
        resolve(err);
      }

      resolve(res);
    });
  });
};
