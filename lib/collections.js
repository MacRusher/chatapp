'use strict';

(Meteor.isClient ? window : global).Rooms = new Mongo.Collection('rooms');

Rooms.allow({
    insert: function (userId) {
        return !!userId;
    }
});

(Meteor.isClient ? window : global).Messages = new Mongo.Collection('msgs');

Messages.allow({
    insert: function (userId) {
        return !!userId;
    }
});