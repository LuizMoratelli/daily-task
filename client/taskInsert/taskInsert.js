Template.taskInsert.events ({
    "click button[name=insert]": function(e, template){
        e.preventDefault();

        var inputTask = $("#task");
        var taskName = inputTask.val();

        Tasks.insert({taskName: taskName, taskDate: new Date()});
        inputTask.val("");
    }
});
