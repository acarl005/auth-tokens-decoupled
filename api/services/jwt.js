var crypto = require('crypto');

exports.encode = function(payload, secret) {
  var header = {
    typ: 'JWT',
    alg: 'HS256',
  };

  var jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
  return jwt + '.' + sign(jwt, secret);
};

function sign(str, key) {
  return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Encode(str) {
  return new Buffer(str).toString('base64');
}