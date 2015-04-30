'use strict';

Template.lobby.helpers({
    rooms: function () {
        return Rooms.find();
    }
});

Template.addRoomForm.events({
    'submit': function (e, t) {
        e.preventDefault();

        var roomName = t.$('#roomName').val() || 'Unnamed';

        Rooms.insert({
            name: roomName
        });

        t.$('form')[0].reset()
    }
});