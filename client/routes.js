'use strict';

FlowRouter.route('/', {
    action: function () {
        FlowLayout.render('layout', {main: 'home'});
    }
});

FlowRouter.route('/lobby', {
    subscriptions: function () {
        this.register('rooms', Meteor.subscribe('rooms'));
    },
    action: function () {
        FlowLayout.render('layout', {main: 'lobby'});
    }
});
FlowRouter.route('/room/:_id', {
    subscriptions: function (params) {
        this.register('messages', Meteor.subscribe('messages', params._id));
    },
    action: function (params) {
        FlowLayout.render('layout', {main: 'room'});
    }
});