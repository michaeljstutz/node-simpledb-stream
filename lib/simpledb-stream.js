'use strict';

// AWS SimpleDB Limits (http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDBLimits.html)
const MAX_PUT_BATCH = 25;
const MAX_PUT_ATTRIBUTES = 256;

const util = require('util');
const stream = require('stream');
const uuid = require('uuid');
const AWS = require('aws-sdk');

var SimpleDBStream = function SimpleDBStream(params) {

  stream.Duplex.call(this, {
    allowHalfOpen: true,
    objectMode: true,
    readableObjectMode: false,
    writableObjectMode: true
  });

};

// We must inherits before adding additional functionality
util.inherits(SimpleDBStream, stream.Duplex);

SimpleDBStream.prototype._write = function _write(object, _enc, cb) {
  return cb();
};

module.exports = SimpleDBStream;
