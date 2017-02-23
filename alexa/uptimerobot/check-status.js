module.exports = function (monitor, status)
{
  let response;

  switch (status) {
    case '0':
      break;
    case '1':
      response = 'I haven\'t had a chance to check on ' + monitor + ' yet';
      break;
    case '2':
      response = monitor + ' is currently up';
      break;
    case '8':
      response = monitor + ' seems to be currently down';
      break;
    case '9':
      response = monitor + ' is currently down';
      break;
    default:
      response = 'I can\'t connect to Uptime Robot right now';
  }

  return response;
};
