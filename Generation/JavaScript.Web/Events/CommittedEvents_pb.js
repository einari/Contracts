// source: Events/CommittedEvents.proto
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
goog.exportSymbol('proto.dolittle.runtime.events.CommittedEvents', null, global);
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
proto.dolittle.runtime.events.CommittedEvents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dolittle.runtime.events.CommittedEvents.repeatedFields_, null);
};
goog.inherits(proto.dolittle.runtime.events.CommittedEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.CommittedEvents.displayName = 'proto.dolittle.runtime.events.CommittedEvents';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dolittle.runtime.events.CommittedEvents.repeatedFields_ = [1];



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
proto.dolittle.runtime.events.CommittedEvents.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.CommittedEvents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.CommittedEvents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.CommittedEvents.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    Events_CommittedEvent_pb.CommittedEvent.toObject, includeInstance)
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
 * @return {!proto.dolittle.runtime.events.CommittedEvents}
 */
proto.dolittle.runtime.events.CommittedEvents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.CommittedEvents;
  return proto.dolittle.runtime.events.CommittedEvents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.CommittedEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.CommittedEvents}
 */
proto.dolittle.runtime.events.CommittedEvents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Events_CommittedEvent_pb.CommittedEvent;
      reader.readMessage(value,Events_CommittedEvent_pb.CommittedEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.dolittle.runtime.events.CommittedEvents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.CommittedEvents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.CommittedEvents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.CommittedEvents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Events_CommittedEvent_pb.CommittedEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CommittedEvent Events = 1;
 * @return {!Array<!proto.dolittle.runtime.events.CommittedEvent>}
 */
proto.dolittle.runtime.events.CommittedEvents.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.dolittle.runtime.events.CommittedEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, Events_CommittedEvent_pb.CommittedEvent, 1));
};


/**
 * @param {!Array<!proto.dolittle.runtime.events.CommittedEvent>} value
 * @return {!proto.dolittle.runtime.events.CommittedEvents} returns this
*/
proto.dolittle.runtime.events.CommittedEvents.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dolittle.runtime.events.CommittedEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dolittle.runtime.events.CommittedEvent}
 */
proto.dolittle.runtime.events.CommittedEvents.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dolittle.runtime.events.CommittedEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dolittle.runtime.events.CommittedEvents} returns this
 */
proto.dolittle.runtime.events.CommittedEvents.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


goog.object.extend(exports, proto.dolittle.runtime.events);