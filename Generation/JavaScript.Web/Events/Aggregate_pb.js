// source: Events/Aggregate.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.dolittle.runtime.events.Aggregate', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dolittle.runtime.events.Aggregate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.Aggregate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.Aggregate.displayName = 'proto.dolittle.runtime.events.Aggregate';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dolittle.runtime.events.Aggregate.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.Aggregate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.Aggregate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.Aggregate.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsource: msg.getEventsource_asB64(),
    aggregateroot: msg.getAggregateroot_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dolittle.runtime.events.Aggregate}
 */
proto.dolittle.runtime.events.Aggregate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.Aggregate;
  return proto.dolittle.runtime.events.Aggregate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.Aggregate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.Aggregate}
 */
proto.dolittle.runtime.events.Aggregate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEventsource(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAggregateroot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.Aggregate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.Aggregate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.Aggregate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.Aggregate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsource_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAggregateroot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes eventSource = 1;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.Aggregate.prototype.getEventsource = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes eventSource = 1;
 * This is a type-conversion wrapper around `getEventsource()`
 * @return {string}
 */
proto.dolittle.runtime.events.Aggregate.prototype.getEventsource_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEventsource()));
};


/**
 * optional bytes eventSource = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEventsource()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.Aggregate.prototype.getEventsource_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEventsource()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.Aggregate} returns this
 */
proto.dolittle.runtime.events.Aggregate.prototype.setEventsource = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes aggregateRoot = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.Aggregate.prototype.getAggregateroot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes aggregateRoot = 2;
 * This is a type-conversion wrapper around `getAggregateroot()`
 * @return {string}
 */
proto.dolittle.runtime.events.Aggregate.prototype.getAggregateroot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAggregateroot()));
};


/**
 * optional bytes aggregateRoot = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAggregateroot()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.Aggregate.prototype.getAggregateroot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAggregateroot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.Aggregate} returns this
 */
proto.dolittle.runtime.events.Aggregate.prototype.setAggregateroot = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.dolittle.runtime.events);