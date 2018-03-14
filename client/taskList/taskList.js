Template.taskList.helpers({
    //Função tasks retorna Objeto Tasks de acordo com o filtro
    tasks: function() {
        return Tasks.find({});
    },

    dateConvert: function() {
        return moment(this.taskDate).format('DD/MM/YYYY HH:mm');
    }
});
Template.taskList.events({
    "click button[name=remove]": function(e, template){
        var task = this;

        Tasks.remove({_id: task._id});
    }
});
