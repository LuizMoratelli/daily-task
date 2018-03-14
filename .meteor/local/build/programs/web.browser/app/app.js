var require = meteorInstall({"client":{"header":{"template.header.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/header/template.header.js                                                                           //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.Raw('<nav class="navbar navbar-default">\n        <div class="navbar-header">\n            <a href="#" class="navbar-brand">\n                Daily-Task\n            </a>\n        </div>\n        <div class="navbar-collapse collapse">\n            <ul class="nav navbar-nav navbar-right">\n\n            </ul>\n        </div>\n    </nav>');
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"taskInsert":{"template.taskInsert.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/taskInsert/template.taskInsert.js                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("taskInsert");
Template["taskInsert"] = new Template("Template.taskInsert", (function() {
  var view = this;
  return HTML.Raw('<div class="row">\n        <div class="col-xs-12">\n            <form>\n                <div class="form-group">\n                    <label for="task">Task</label>\n                    <input type="text" id="task" class="form-control" placeholder="Your task here...">\n                </div>\n                <div class="form-group">\n                    <button name="insert" type="button" class="btn btn-success btn-block">New task</button>\n                </div>\n            </form>\n        </div>\n    </div>');
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"taskInsert.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/taskInsert/taskInsert.js                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.taskInsert.events({
  "click button[name=insert]": function (e, template) {
    e.preventDefault();
    var inputTask = $("#task");
    var taskName = inputTask.val();
    Tasks.insert({
      taskName: taskName,
      taskDate: new Date()
    });
    inputTask.val("");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"taskList":{"template.taskList.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/taskList/template.taskList.js                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("taskList");
Template["taskList"] = new Template("Template.taskList", (function() {
  var view = this;
  return HTML.DIV({
    class: "row"
  }, "\n        ", HTML.DIV({
    class: "col-xs-12"
  }, "\n            ", HTML.Raw("<!--Para cada tasks (função do Helper)-->"), "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "row"
    }, "\n                ", HTML.DIV({
      class: "col-xs-11"
    }, "\n                    ", HTML.Comment("Atributo da task"), "\n                    ", Blaze.View("lookup:dateConvert", function() {
      return Spacebars.mustache(view.lookup("dateConvert"));
    }), " - ", Blaze.View("lookup:taskName", function() {
      return Spacebars.mustache(view.lookup("taskName"));
    }), "\n                "), "\n                ", HTML.DIV({
      class: "col-xs-1"
    }, "\n                    ", HTML.BUTTON({
      type: "button",
      class: "btn btn-danger"
    }, "Excluir"), "\n                "), "\n            "), "\n            ", HTML.HR(), "\n            " ];
  }), "\n        "), "\n    ");
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"taskList.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/taskList/taskList.js                                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.taskList.helpers({
  //Função tasks retorna Objeto Tasks de acordo com o filtro
  tasks: function () {
    return Tasks.find({});
  },
  dateConvert: function () {
    return moment(this.taskDate).format('DD/MM/YYYY HH:mm');
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.index.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/template.index.js                                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.HEADER({
    class: "container"
  }, "\n        ", Spacebars.include(view.lookupTemplate("header")), "\n    "), "\n    ", HTML.MAIN({
    class: "container"
  }, "\n        ", Spacebars.include(view.lookupTemplate("taskInsert")), "\n        ", HTML.Raw("<!--Chama um Template-->"), "\n        ", Spacebars.include(view.lookupTemplate("taskList")), "\n    ") ];
}));
Meteor.startup(Template.body.renderToDocument);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"models":{"tasks.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// models/tasks.js                                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
//Objeto Tasks = coleção Mongo Tasks
Tasks = new Mongo.Collection("Tasks");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("/client/header/template.header.js");
require("/client/taskInsert/template.taskInsert.js");
require("/client/taskList/template.taskList.js");
require("/client/template.index.js");
require("/client/taskInsert/taskInsert.js");
require("/client/taskList/taskList.js");
require("/models/tasks.js");