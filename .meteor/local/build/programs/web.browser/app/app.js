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
    }, "\n                    ", HTML.Comment("Atributo da task"), "\n                    ", Blaze.View("lookup:data", function() {
      return Spacebars.mustache(view.lookup("data"));
    }), " - ", Blaze.View("lookup:nome", function() {
      return Spacebars.mustache(view.lookup("nome"));
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
    return moment(this.data).fornat('DD/MM/YYYY HH:mm');
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
  }, "\n        ", HTML.Raw("<!--Chama um Template-->"), "\n        ", Spacebars.include(view.lookupTemplate("taskList")), "\n    ") ];
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
require("/client/taskList/template.taskList.js");
require("/client/template.index.js");
require("/client/taskList/taskList.js");
require("/models/tasks.js");