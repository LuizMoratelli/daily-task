Meteor.methods({
    addTask: function (obj) {
        Tasks.insert({taskName: obj.taskName, taskUser: this.userId, taskDate: obj.taskDate});
    },
    removeTask: function (id) {
        Tasks.remove({_id: id, taskUser: this.userId});
    }
});
