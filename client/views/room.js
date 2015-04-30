'use strict';

Template.room.helpers({
    messages: function () {
        return Messages.find({
            roomId: FlowRouter.getParam('_id')
        }, {
            limit: 10,
            sort: {
                ts: 1
            }
        });
    }
});

Template.addMessageForm.events({
    'submit': function (e, t) {
        e.preventDefault();

        var msg = t.$('#message').val() || '';
        var roomId = FlowRouter.getParam('_id');
        var user = Meteor.user();

        if (!user) {
            return;
        }

        Messages.insert({
            msg: msg,
            roomId: roomId,
            userId: user._id,
            name: user.profile.name,
            ts: new Date()
        });

        t.$('form')[0].reset()
    }
});