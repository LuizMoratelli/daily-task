Meteor.startup(function() {

    Meteor.publish("Tasks", function() {
        return Tasks.find({});
    });

});