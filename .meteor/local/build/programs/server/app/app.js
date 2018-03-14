var require = meteorInstall({"models":{"tasks.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// models/tasks.js                                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
//Objeto Tasks = coleção Mongo Tasks
Tasks = new Mongo.Collection("Tasks");
///////////////////////////////////////////////////////////////////////

}},"server":{"methods.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/methods.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.methods({
  addTask: function (obj) {
    Tasks.insert({
      taskName: obj.taskName,
      taskDate: obj.taskDate
    });
  },
  removeTask: function (id) {
    Tasks.remove({
      _id: id
    });
  }
});
///////////////////////////////////////////////////////////////////////

},"startup.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/startup.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function () {
  Meteor.publish("Tasks", function () {
    return Tasks.find({});
  });
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("/models/tasks.js");
require("/server/methods.js");
require("/server/startup.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbW9kZWxzL3Rhc2tzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWV0aG9kcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3N0YXJ0dXAuanMiXSwibmFtZXMiOlsiVGFza3MiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJtZXRob2RzIiwiYWRkVGFzayIsIm9iaiIsImluc2VydCIsInRhc2tOYW1lIiwidGFza0RhdGUiLCJyZW1vdmVUYXNrIiwiaWQiLCJyZW1vdmUiLCJfaWQiLCJzdGFydHVwIiwicHVibGlzaCIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQUEsUUFBUSxJQUFJQyxNQUFNQyxVQUFWLENBQXFCLE9BQXJCLENBQVIsQzs7Ozs7Ozs7Ozs7QUNEQUMsT0FBT0MsT0FBUCxDQUFlO0FBQ1hDLFdBQVMsVUFBVUMsR0FBVixFQUFlO0FBQ3BCTixVQUFNTyxNQUFOLENBQWE7QUFBQ0MsZ0JBQVVGLElBQUlFLFFBQWY7QUFBeUJDLGdCQUFVSCxJQUFJRztBQUF2QyxLQUFiO0FBQ0gsR0FIVTtBQUlYQyxjQUFZLFVBQVVDLEVBQVYsRUFBYztBQUN0QlgsVUFBTVksTUFBTixDQUFhO0FBQUNDLFdBQUtGO0FBQU4sS0FBYjtBQUNIO0FBTlUsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBUixPQUFPVyxPQUFQLENBQWUsWUFBVztBQUV0QlgsU0FBT1ksT0FBUCxDQUFlLE9BQWYsRUFBd0IsWUFBVztBQUMvQixXQUFPZixNQUFNZ0IsSUFBTixDQUFXLEVBQVgsQ0FBUDtBQUNILEdBRkQ7QUFJSCxDQU5ELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vT2JqZXRvIFRhc2tzID0gY29sZcOnw6NvIE1vbmdvIFRhc2tzXG5UYXNrcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiVGFza3NcIik7XG4iLCJNZXRlb3IubWV0aG9kcyh7XG4gICAgYWRkVGFzazogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBUYXNrcy5pbnNlcnQoe3Rhc2tOYW1lOiBvYmoudGFza05hbWUsIHRhc2tEYXRlOiBvYmoudGFza0RhdGV9KTtcbiAgICB9LFxuICAgIHJlbW92ZVRhc2s6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBUYXNrcy5yZW1vdmUoe19pZDogaWR9KTtcbiAgICB9XG59KTtcbiIsIk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXG4gICAgTWV0ZW9yLnB1Ymxpc2goXCJUYXNrc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFRhc2tzLmZpbmQoe30pO1xuICAgIH0pO1xuXG59KTtcbiJdfQ==
