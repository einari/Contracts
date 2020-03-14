// GENERATED CODE -- DO NOT EDIT!
// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Events_Aggregate_pb = require('../Events/Aggregate_pb.js');
var Events_AggregateEventCommitResponse_pb = require('../Events/AggregateEventCommitResponse_pb.js');
var Events_EventCommitResponse_pb = require('../Events/EventCommitResponse_pb.js');
var Events_FetchForAggregateResponse_pb = require('../Events/FetchForAggregateResponse_pb.js');
var Events_UncommittedEvents_pb = require('../Events/UncommittedEvents_pb.js');
var Events_UncommittedAggregateEvents_pb = require('../Events/UncommittedAggregateEvents_pb.js');
function serialize_dolittle_runtime_events_Aggregate(arg) {
    if (!(arg instanceof Events_Aggregate_pb.Aggregate)) {
        throw new Error('Expected argument of type dolittle.runtime.events.Aggregate');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_dolittle_runtime_events_Aggregate(buffer_arg) {
    return Events_Aggregate_pb.Aggregate.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_dolittle_runtime_events_AggregateEventCommitResponse(arg) {
    if (!(arg instanceof Events_AggregateEventCommitResponse_pb.AggregateEventCommitResponse)) {
        throw new Error('Expected argument of type dolittle.runtime.events.AggregateEventCommitResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_dolittle_runtime_events_AggregateEventCommitResponse(buffer_arg) {
    return Events_AggregateEventCommitResponse_pb.AggregateEventCommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_dolittle_runtime_events_EventCommitResponse(arg) {
    if (!(arg instanceof Events_EventCommitResponse_pb.EventCommitResponse)) {
        throw new Error('Expected argument of type dolittle.runtime.events.EventCommitResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_dolittle_runtime_events_EventCommitResponse(buffer_arg) {
    return Events_EventCommitResponse_pb.EventCommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_dolittle_runtime_events_FetchForAggregateResponse(arg) {
    if (!(arg instanceof Events_FetchForAggregateResponse_pb.FetchForAggregateResponse)) {
        throw new Error('Expected argument of type dolittle.runtime.events.FetchForAggregateResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_dolittle_runtime_events_FetchForAggregateResponse(buffer_arg) {
    return Events_FetchForAggregateResponse_pb.FetchForAggregateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_dolittle_runtime_events_UncommittedAggregateEvents(arg) {
    if (!(arg instanceof Events_UncommittedAggregateEvents_pb.UncommittedAggregateEvents)) {
        throw new Error('Expected argument of type dolittle.runtime.events.UncommittedAggregateEvents');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_dolittle_runtime_events_UncommittedAggregateEvents(buffer_arg) {
    return Events_UncommittedAggregateEvents_pb.UncommittedAggregateEvents.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_dolittle_runtime_events_UncommittedEvents(arg) {
    if (!(arg instanceof Events_UncommittedEvents_pb.UncommittedEvents)) {
        throw new Error('Expected argument of type dolittle.runtime.events.UncommittedEvents');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_dolittle_runtime_events_UncommittedEvents(buffer_arg) {
    return Events_UncommittedEvents_pb.UncommittedEvents.deserializeBinary(new Uint8Array(buffer_arg));
}
// Represents the Event Store service
var EventStoreService = exports.EventStoreService = {
    commit: {
        path: '/dolittle.runtime.events.EventStore/Commit',
        requestStream: false,
        responseStream: false,
        requestType: Events_UncommittedEvents_pb.UncommittedEvents,
        responseType: Events_EventCommitResponse_pb.EventCommitResponse,
        requestSerialize: serialize_dolittle_runtime_events_UncommittedEvents,
        requestDeserialize: deserialize_dolittle_runtime_events_UncommittedEvents,
        responseSerialize: serialize_dolittle_runtime_events_EventCommitResponse,
        responseDeserialize: deserialize_dolittle_runtime_events_EventCommitResponse,
    },
    commitForAggregate: {
        path: '/dolittle.runtime.events.EventStore/CommitForAggregate',
        requestStream: false,
        responseStream: false,
        requestType: Events_UncommittedAggregateEvents_pb.UncommittedAggregateEvents,
        responseType: Events_AggregateEventCommitResponse_pb.AggregateEventCommitResponse,
        requestSerialize: serialize_dolittle_runtime_events_UncommittedAggregateEvents,
        requestDeserialize: deserialize_dolittle_runtime_events_UncommittedAggregateEvents,
        responseSerialize: serialize_dolittle_runtime_events_AggregateEventCommitResponse,
        responseDeserialize: deserialize_dolittle_runtime_events_AggregateEventCommitResponse,
    },
    fetchForAggregate: {
        path: '/dolittle.runtime.events.EventStore/FetchForAggregate',
        requestStream: false,
        responseStream: false,
        requestType: Events_Aggregate_pb.Aggregate,
        responseType: Events_FetchForAggregateResponse_pb.FetchForAggregateResponse,
        requestSerialize: serialize_dolittle_runtime_events_Aggregate,
        requestDeserialize: deserialize_dolittle_runtime_events_Aggregate,
        responseSerialize: serialize_dolittle_runtime_events_FetchForAggregateResponse,
        responseDeserialize: deserialize_dolittle_runtime_events_FetchForAggregateResponse,
    },
};
exports.EventStoreClient = grpc.makeGenericClientConstructor(EventStoreService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdG9yZV9ncnBjX3BiLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJFdmVudHMvRXZlbnRTdG9yZV9ncnBjX3BiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUVqQywwQkFBMEI7QUFDMUIsK0NBQStDO0FBQy9DLHFHQUFxRztBQUNyRyxFQUFFO0FBQ0YsWUFBWSxDQUFDO0FBQ2IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksbUJBQW1CLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0QsSUFBSSxzQ0FBc0MsR0FBRyxPQUFPLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUNyRyxJQUFJLDZCQUE2QixHQUFHLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ25GLElBQUksbUNBQW1DLEdBQUcsT0FBTyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDL0YsSUFBSSwyQkFBMkIsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUMvRSxJQUFJLG9DQUFvQyxHQUFHLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBRWpHLFNBQVMsMkNBQTJDLENBQUMsR0FBRztJQUN0RCxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0tBQ2hGO0lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRCxTQUFTLDZDQUE2QyxDQUFDLFVBQVU7SUFDL0QsT0FBTyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQsU0FBUyw4REFBOEQsQ0FBQyxHQUFHO0lBQ3pFLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxzQ0FBc0MsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1FBQ3pGLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztLQUNuRztJQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxnRUFBZ0UsQ0FBQyxVQUFVO0lBQ2xGLE9BQU8sc0NBQXNDLENBQUMsNEJBQTRCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMzSCxDQUFDO0FBRUQsU0FBUyxxREFBcUQsQ0FBQyxHQUFHO0lBQ2hFLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSw2QkFBNkIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUVBQXVFLENBQUMsQ0FBQztLQUMxRjtJQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyx1REFBdUQsQ0FBQyxVQUFVO0lBQ3pFLE9BQU8sNkJBQTZCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN6RyxDQUFDO0FBRUQsU0FBUywyREFBMkQsQ0FBQyxHQUFHO0lBQ3RFLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxtQ0FBbUMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1FBQ25GLE1BQU0sSUFBSSxLQUFLLENBQUMsNkVBQTZFLENBQUMsQ0FBQztLQUNoRztJQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyw2REFBNkQsQ0FBQyxVQUFVO0lBQy9FLE9BQU8sbUNBQW1DLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNySCxDQUFDO0FBRUQsU0FBUyw0REFBNEQsQ0FBQyxHQUFHO0lBQ3ZFLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxvQ0FBb0MsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO1FBQ3JGLE1BQU0sSUFBSSxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FBQztLQUNqRztJQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyw4REFBOEQsQ0FBQyxVQUFVO0lBQ2hGLE9BQU8sb0NBQW9DLENBQUMsMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN2SCxDQUFDO0FBRUQsU0FBUyxtREFBbUQsQ0FBQyxHQUFHO0lBQzlELElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSwyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQ25FLE1BQU0sSUFBSSxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQztLQUN4RjtJQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxxREFBcUQsQ0FBQyxVQUFVO0lBQ3ZFLE9BQU8sMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNyRyxDQUFDO0FBR0QscUNBQXFDO0FBQ3JDLElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixHQUFHO0lBQ2xELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSw0Q0FBNEM7UUFDbEQsYUFBYSxFQUFFLEtBQUs7UUFDcEIsY0FBYyxFQUFFLEtBQUs7UUFDckIsV0FBVyxFQUFFLDJCQUEyQixDQUFDLGlCQUFpQjtRQUMxRCxZQUFZLEVBQUUsNkJBQTZCLENBQUMsbUJBQW1CO1FBQy9ELGdCQUFnQixFQUFFLG1EQUFtRDtRQUNyRSxrQkFBa0IsRUFBRSxxREFBcUQ7UUFDekUsaUJBQWlCLEVBQUUscURBQXFEO1FBQ3hFLG1CQUFtQixFQUFFLHVEQUF1RDtLQUM3RTtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLElBQUksRUFBRSx3REFBd0Q7UUFDOUQsYUFBYSxFQUFFLEtBQUs7UUFDcEIsY0FBYyxFQUFFLEtBQUs7UUFDckIsV0FBVyxFQUFFLG9DQUFvQyxDQUFDLDBCQUEwQjtRQUM1RSxZQUFZLEVBQUUsc0NBQXNDLENBQUMsNEJBQTRCO1FBQ2pGLGdCQUFnQixFQUFFLDREQUE0RDtRQUM5RSxrQkFBa0IsRUFBRSw4REFBOEQ7UUFDbEYsaUJBQWlCLEVBQUUsOERBQThEO1FBQ2pGLG1CQUFtQixFQUFFLGdFQUFnRTtLQUN0RjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLElBQUksRUFBRSx1REFBdUQ7UUFDN0QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsY0FBYyxFQUFFLEtBQUs7UUFDckIsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQVM7UUFDMUMsWUFBWSxFQUFFLG1DQUFtQyxDQUFDLHlCQUF5QjtRQUMzRSxnQkFBZ0IsRUFBRSwyQ0FBMkM7UUFDN0Qsa0JBQWtCLEVBQUUsNkNBQTZDO1FBQ2pFLGlCQUFpQixFQUFFLDJEQUEyRDtRQUM5RSxtQkFBbUIsRUFBRSw2REFBNkQ7S0FDbkY7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbi8vIE9yaWdpbmFsIGZpbGUgY29tbWVudHM6XG4vLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cbi8vXG4ndXNlIHN0cmljdCc7XG52YXIgZ3JwYyA9IHJlcXVpcmUoJ2dycGMnKTtcbnZhciBFdmVudHNfQWdncmVnYXRlX3BiID0gcmVxdWlyZSgnLi4vRXZlbnRzL0FnZ3JlZ2F0ZV9wYi5qcycpO1xudmFyIEV2ZW50c19BZ2dyZWdhdGVFdmVudENvbW1pdFJlc3BvbnNlX3BiID0gcmVxdWlyZSgnLi4vRXZlbnRzL0FnZ3JlZ2F0ZUV2ZW50Q29tbWl0UmVzcG9uc2VfcGIuanMnKTtcbnZhciBFdmVudHNfRXZlbnRDb21taXRSZXNwb25zZV9wYiA9IHJlcXVpcmUoJy4uL0V2ZW50cy9FdmVudENvbW1pdFJlc3BvbnNlX3BiLmpzJyk7XG52YXIgRXZlbnRzX0ZldGNoRm9yQWdncmVnYXRlUmVzcG9uc2VfcGIgPSByZXF1aXJlKCcuLi9FdmVudHMvRmV0Y2hGb3JBZ2dyZWdhdGVSZXNwb25zZV9wYi5qcycpO1xudmFyIEV2ZW50c19VbmNvbW1pdHRlZEV2ZW50c19wYiA9IHJlcXVpcmUoJy4uL0V2ZW50cy9VbmNvbW1pdHRlZEV2ZW50c19wYi5qcycpO1xudmFyIEV2ZW50c19VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c19wYiA9IHJlcXVpcmUoJy4uL0V2ZW50cy9VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c19wYi5qcycpO1xuXG5mdW5jdGlvbiBzZXJpYWxpemVfZG9saXR0bGVfcnVudGltZV9ldmVudHNfQWdncmVnYXRlKGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBFdmVudHNfQWdncmVnYXRlX3BiLkFnZ3JlZ2F0ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGFyZ3VtZW50IG9mIHR5cGUgZG9saXR0bGUucnVudGltZS5ldmVudHMuQWdncmVnYXRlJyk7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX0FnZ3JlZ2F0ZShidWZmZXJfYXJnKSB7XG4gIHJldHVybiBFdmVudHNfQWdncmVnYXRlX3BiLkFnZ3JlZ2F0ZS5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19BZ2dyZWdhdGVFdmVudENvbW1pdFJlc3BvbnNlKGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBFdmVudHNfQWdncmVnYXRlRXZlbnRDb21taXRSZXNwb25zZV9wYi5BZ2dyZWdhdGVFdmVudENvbW1pdFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJndW1lbnQgb2YgdHlwZSBkb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5BZ2dyZWdhdGVFdmVudENvbW1pdFJlc3BvbnNlJyk7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX0FnZ3JlZ2F0ZUV2ZW50Q29tbWl0UmVzcG9uc2UoYnVmZmVyX2FyZykge1xuICByZXR1cm4gRXZlbnRzX0FnZ3JlZ2F0ZUV2ZW50Q29tbWl0UmVzcG9uc2VfcGIuQWdncmVnYXRlRXZlbnRDb21taXRSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19FdmVudENvbW1pdFJlc3BvbnNlKGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBFdmVudHNfRXZlbnRDb21taXRSZXNwb25zZV9wYi5FdmVudENvbW1pdFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJndW1lbnQgb2YgdHlwZSBkb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5FdmVudENvbW1pdFJlc3BvbnNlJyk7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX0V2ZW50Q29tbWl0UmVzcG9uc2UoYnVmZmVyX2FyZykge1xuICByZXR1cm4gRXZlbnRzX0V2ZW50Q29tbWl0UmVzcG9uc2VfcGIuRXZlbnRDb21taXRSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlKGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBFdmVudHNfRmV0Y2hGb3JBZ2dyZWdhdGVSZXNwb25zZV9wYi5GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJndW1lbnQgb2YgdHlwZSBkb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlJyk7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX0ZldGNoRm9yQWdncmVnYXRlUmVzcG9uc2UoYnVmZmVyX2FyZykge1xuICByZXR1cm4gRXZlbnRzX0ZldGNoRm9yQWdncmVnYXRlUmVzcG9uc2VfcGIuRmV0Y2hGb3JBZ2dyZWdhdGVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cyhhcmcpIHtcbiAgaWYgKCEoYXJnIGluc3RhbmNlb2YgRXZlbnRzX1VuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzX3BiLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJndW1lbnQgb2YgdHlwZSBkb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cycpO1xuICB9XG4gIHJldHVybiBCdWZmZXIuZnJvbShhcmcuc2VyaWFsaXplQmluYXJ5KCkpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cyhidWZmZXJfYXJnKSB7XG4gIHJldHVybiBFdmVudHNfVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHNfcGIuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMuZGVzZXJpYWxpemVCaW5hcnkobmV3IFVpbnQ4QXJyYXkoYnVmZmVyX2FyZykpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVfZG9saXR0bGVfcnVudGltZV9ldmVudHNfVW5jb21taXR0ZWRFdmVudHMoYXJnKSB7XG4gIGlmICghKGFyZyBpbnN0YW5jZW9mIEV2ZW50c19VbmNvbW1pdHRlZEV2ZW50c19wYi5VbmNvbW1pdHRlZEV2ZW50cykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGFyZ3VtZW50IG9mIHR5cGUgZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRFdmVudHMnKTtcbiAgfVxuICByZXR1cm4gQnVmZmVyLmZyb20oYXJnLnNlcmlhbGl6ZUJpbmFyeSgpKTtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVfZG9saXR0bGVfcnVudGltZV9ldmVudHNfVW5jb21taXR0ZWRFdmVudHMoYnVmZmVyX2FyZykge1xuICByZXR1cm4gRXZlbnRzX1VuY29tbWl0dGVkRXZlbnRzX3BiLlVuY29tbWl0dGVkRXZlbnRzLmRlc2VyaWFsaXplQmluYXJ5KG5ldyBVaW50OEFycmF5KGJ1ZmZlcl9hcmcpKTtcbn1cblxuXG4vLyBSZXByZXNlbnRzIHRoZSBFdmVudCBTdG9yZSBzZXJ2aWNlXG52YXIgRXZlbnRTdG9yZVNlcnZpY2UgPSBleHBvcnRzLkV2ZW50U3RvcmVTZXJ2aWNlID0ge1xuICBjb21taXQ6IHtcbiAgICBwYXRoOiAnL2RvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLkV2ZW50U3RvcmUvQ29tbWl0JyxcbiAgICByZXF1ZXN0U3RyZWFtOiBmYWxzZSxcbiAgICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gICAgcmVxdWVzdFR5cGU6IEV2ZW50c19VbmNvbW1pdHRlZEV2ZW50c19wYi5VbmNvbW1pdHRlZEV2ZW50cyxcbiAgICByZXNwb25zZVR5cGU6IEV2ZW50c19FdmVudENvbW1pdFJlc3BvbnNlX3BiLkV2ZW50Q29tbWl0UmVzcG9uc2UsXG4gICAgcmVxdWVzdFNlcmlhbGl6ZTogc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX1VuY29tbWl0dGVkRXZlbnRzLFxuICAgIHJlcXVlc3REZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVfZG9saXR0bGVfcnVudGltZV9ldmVudHNfVW5jb21taXR0ZWRFdmVudHMsXG4gICAgcmVzcG9uc2VTZXJpYWxpemU6IHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19FdmVudENvbW1pdFJlc3BvbnNlLFxuICAgIHJlc3BvbnNlRGVzZXJpYWxpemU6IGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX0V2ZW50Q29tbWl0UmVzcG9uc2UsXG4gIH0sXG4gIGNvbW1pdEZvckFnZ3JlZ2F0ZToge1xuICAgIHBhdGg6ICcvZG9saXR0bGUucnVudGltZS5ldmVudHMuRXZlbnRTdG9yZS9Db21taXRGb3JBZ2dyZWdhdGUnLFxuICAgIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICAgIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgICByZXF1ZXN0VHlwZTogRXZlbnRzX1VuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzX3BiLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLFxuICAgIHJlc3BvbnNlVHlwZTogRXZlbnRzX0FnZ3JlZ2F0ZUV2ZW50Q29tbWl0UmVzcG9uc2VfcGIuQWdncmVnYXRlRXZlbnRDb21taXRSZXNwb25zZSxcbiAgICByZXF1ZXN0U2VyaWFsaXplOiBzZXJpYWxpemVfZG9saXR0bGVfcnVudGltZV9ldmVudHNfVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMsXG4gICAgcmVxdWVzdERlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cyxcbiAgICByZXNwb25zZVNlcmlhbGl6ZTogc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX0FnZ3JlZ2F0ZUV2ZW50Q29tbWl0UmVzcG9uc2UsXG4gICAgcmVzcG9uc2VEZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVfZG9saXR0bGVfcnVudGltZV9ldmVudHNfQWdncmVnYXRlRXZlbnRDb21taXRSZXNwb25zZSxcbiAgfSxcbiAgZmV0Y2hGb3JBZ2dyZWdhdGU6IHtcbiAgICBwYXRoOiAnL2RvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLkV2ZW50U3RvcmUvRmV0Y2hGb3JBZ2dyZWdhdGUnLFxuICAgIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICAgIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgICByZXF1ZXN0VHlwZTogRXZlbnRzX0FnZ3JlZ2F0ZV9wYi5BZ2dyZWdhdGUsXG4gICAgcmVzcG9uc2VUeXBlOiBFdmVudHNfRmV0Y2hGb3JBZ2dyZWdhdGVSZXNwb25zZV9wYi5GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlLFxuICAgIHJlcXVlc3RTZXJpYWxpemU6IHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19BZ2dyZWdhdGUsXG4gICAgcmVxdWVzdERlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19BZ2dyZWdhdGUsXG4gICAgcmVzcG9uc2VTZXJpYWxpemU6IHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlLFxuICAgIHJlc3BvbnNlRGVzZXJpYWxpemU6IGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX0ZldGNoRm9yQWdncmVnYXRlUmVzcG9uc2UsXG4gIH0sXG59O1xuXG5leHBvcnRzLkV2ZW50U3RvcmVDbGllbnQgPSBncnBjLm1ha2VHZW5lcmljQ2xpZW50Q29uc3RydWN0b3IoRXZlbnRTdG9yZVNlcnZpY2UpO1xuIl19