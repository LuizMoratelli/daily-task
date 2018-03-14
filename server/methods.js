Meteor.methods({
    addTask: function (obj) {
        Tasks.insert({taskName: obj.taskName, taskDate: obj.taskDate});
    },
    removeTask: function (id) {
        Tasks.remove({_id: id});
    }
});
