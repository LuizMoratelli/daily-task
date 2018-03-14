Template.taskList.helpers({
    //Função tasks retorna Objeto Tasks de acordo com o filtro
    tasks: function() {
        return Tasks.find({});
    },
    //Função de lib para formatar data
    dateConvert: function() {
        return moment(this.taskDate).format('DD/MM/YYYY HH:mm');
    }
});
Template.taskList.events({
    //remove quando o botão de nome remove for clicado, filtrando por _id
    "click button[name=remove]": function(e, template){
        var task = this;
        //remove informações do Mongo
        //Tasks.remove({_id: task._id});
        Meteor.call("removeTask", task._id);
    }
});
