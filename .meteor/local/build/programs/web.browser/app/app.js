var require = meteorInstall({"client":{"taskList":{"template.taskList.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/taskList/template.taskList.js                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //

Template.__checkName("taskList");
Template["taskList"] = new Template("Template.taskList", (function() {
  var view = this;
  return HTML.UL(HTML.Raw("\n        <!--Para cada tasks (função do Helper)-->\n        "), Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks"));
  }, function() {
    return [ "\n        ", HTML.Comment("Atributo da task"), "\n            ", HTML.LI(Blaze.View("lookup:nome", function() {
      return Spacebars.mustache(view.lookup("nome"));
    })), "\n        " ];
  }), "\n    ");
}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"taskList.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/taskList/taskList.js                                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.taskList.helpers({
  //Função tasks retorna Objeto Tasks de acordo com o filtro
  tasks: function () {
    return Tasks.find({});
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.index.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/template.index.js                                                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<h1>Daily-Task</h1>\n    <!--Chama um Template-->\n    "), Spacebars.include(view.lookupTemplate("taskList")) ];
}));
Meteor.startup(Template.body.renderToDocument);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"models":{"tasks.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// models/tasks.js                                                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
//Objeto Tasks = coleção Mongo Tasks
Tasks = new Mongo.Collection("Tasks");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("/client/taskList/template.taskList.js");
require("/client/template.index.js");
require("/client/taskList/taskList.js");
require("/models/tasks.js");