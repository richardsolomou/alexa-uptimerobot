module.exports = {
  /**
   * Tell
   *
   * @param {String}   response
   * @param {Function} callback
   *
   * @returns {Function}
   */
  tell: function (response, callback)
  {
    return callback(null, {
      version: 'dev',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: response || 'invalid response'
        },
        shouldEndSession: true
      }
    });
  },

  /**
   * Ask
   *
   * @param {String}   response
   * @param {Function} callback
   *
   * @returns {Function}
   */
  ask: function (response, callback)
  {
    return callback(null, {
      version: 'dev',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: response || 'invalid response'
        },
        shouldEndSession: false
      }
    });
  }
};
