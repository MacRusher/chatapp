'use strict';

Template.home.events({
    'click .js-login': function (e) {
        e.preventDefault();

        Meteor.loginWithGoogle({}, function (err) {
            if (!err) {
                FlowRouter.go('/lobby');
            }
        })
    }
});