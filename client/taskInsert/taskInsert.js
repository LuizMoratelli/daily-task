Template.taskInsert.events ({
    "click button[name=insert]": function(e, template){
        //evita refresh padrão da página ao enviar formulário
        e.preventDefault();
        //seleciona objeto da DOM que possuir ID task
        var inputTask = $("#task");
        //captura o valor do objeto
        var taskName = inputTask.val();
        //insere informaçações no Mongo
        //Tasks.insert({taskName: taskName, taskDate: new Date()});
        Meteor.call("addTask", {taskName: taskName, taskDate: new Date()});
        inputTask.val("");
    }
});
