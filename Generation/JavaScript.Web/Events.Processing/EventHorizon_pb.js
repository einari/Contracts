// source: Events.Processing/EventHorizon.proto
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

var Events_CommittedEvent_pb = require('../Events/CommittedEvent_pb.js');
goog.object.extend(proto, Events_CommittedEvent_pb);
goog.exportSymbol('proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse', null, global);
goog.exportSymbol('proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest', null, global);
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
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.displayName = 'proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest';
}
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
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.displayName = 'proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse';
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
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscribertenant: msg.getSubscribertenant_asB64(),
    producertenant: msg.getProducertenant_asB64(),
    microservice: msg.getMicroservice_asB64(),
    publiceventsposition: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest;
  return proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubscribertenant(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProducertenant(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMicroservice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPubliceventsposition(value);
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
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscribertenant_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getProducertenant_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMicroservice_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPubliceventsposition();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional bytes subscriberTenant = 1;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getSubscribertenant = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes subscriberTenant = 1;
 * This is a type-conversion wrapper around `getSubscribertenant()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getSubscribertenant_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubscribertenant()));
};


/**
 * optional bytes subscriberTenant = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubscribertenant()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getSubscribertenant_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubscribertenant()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest} returns this
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.setSubscribertenant = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes producerTenant = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getProducertenant = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes producerTenant = 2;
 * This is a type-conversion wrapper around `getProducertenant()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getProducertenant_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProducertenant()));
};


/**
 * optional bytes producerTenant = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProducertenant()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getProducertenant_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProducertenant()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest} returns this
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.setProducertenant = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes microservice = 3;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getMicroservice = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes microservice = 3;
 * This is a type-conversion wrapper around `getMicroservice()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getMicroservice_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMicroservice()));
};


/**
 * optional bytes microservice = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMicroservice()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getMicroservice_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMicroservice()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest} returns this
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.setMicroservice = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint32 publicEventsPosition = 4;
 * @return {number}
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.getPubliceventsposition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest} returns this
 */
proto.dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest.prototype.setPubliceventsposition = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





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
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: (f = msg.getEvent()) && Events_CommittedEvent_pb.CommittedEvent.toObject(includeInstance, f)
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
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse}
 */
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse;
  return proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse}
 */
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Events_CommittedEvent_pb.CommittedEvent;
      reader.readMessage(value,Events_CommittedEvent_pb.CommittedEvent.deserializeBinaryFromReader);
      msg.setEvent(value);
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
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Events_CommittedEvent_pb.CommittedEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional dolittle.runtime.events.CommittedEvent event = 1;
 * @return {?proto.dolittle.runtime.events.CommittedEvent}
 */
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.prototype.getEvent = function() {
  return /** @type{?proto.dolittle.runtime.events.CommittedEvent} */ (
    jspb.Message.getWrapperField(this, Events_CommittedEvent_pb.CommittedEvent, 1));
};


/**
 * @param {?proto.dolittle.runtime.events.CommittedEvent|undefined} value
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse} returns this
*/
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse} returns this
 */
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.dolittle.runtime.events.processing);