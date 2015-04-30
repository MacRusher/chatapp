'use strict';

Meteor.publish('rooms', function () {
    return Rooms.find();
});

Meteor.publish('messages', function (roomId) {
    check(roomId, String);

    return Messages.find({
        roomId: roomId
    }, {
        limit: 10,
        sort: {
            ts: -1
        }
    });
});