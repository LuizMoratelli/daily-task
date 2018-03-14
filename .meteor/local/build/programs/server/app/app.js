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
      taskUser: this.userId,
      taskDate: obj.taskDate
    });
  },
  removeTask: function (id) {
    Tasks.remove({
      _id: id,
      taskUser: this.userId
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
    return Tasks.find({
      taskUser: this.userId
    });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbW9kZWxzL3Rhc2tzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWV0aG9kcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3N0YXJ0dXAuanMiXSwibmFtZXMiOlsiVGFza3MiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJtZXRob2RzIiwiYWRkVGFzayIsIm9iaiIsImluc2VydCIsInRhc2tOYW1lIiwidGFza1VzZXIiLCJ1c2VySWQiLCJ0YXNrRGF0ZSIsInJlbW92ZVRhc2siLCJpZCIsInJlbW92ZSIsIl9pZCIsInN0YXJ0dXAiLCJwdWJsaXNoIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBQSxRQUFRLElBQUlDLE1BQU1DLFVBQVYsQ0FBcUIsT0FBckIsQ0FBUixDOzs7Ozs7Ozs7OztBQ0RBQyxPQUFPQyxPQUFQLENBQWU7QUFDWEMsV0FBUyxVQUFVQyxHQUFWLEVBQWU7QUFDcEJOLFVBQU1PLE1BQU4sQ0FBYTtBQUFDQyxnQkFBVUYsSUFBSUUsUUFBZjtBQUF5QkMsZ0JBQVUsS0FBS0MsTUFBeEM7QUFBZ0RDLGdCQUFVTCxJQUFJSztBQUE5RCxLQUFiO0FBQ0gsR0FIVTtBQUlYQyxjQUFZLFVBQVVDLEVBQVYsRUFBYztBQUN0QmIsVUFBTWMsTUFBTixDQUFhO0FBQUNDLFdBQUtGLEVBQU47QUFBVUosZ0JBQVUsS0FBS0M7QUFBekIsS0FBYjtBQUNIO0FBTlUsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBUCxPQUFPYSxPQUFQLENBQWUsWUFBVztBQUV0QmIsU0FBT2MsT0FBUCxDQUFlLE9BQWYsRUFBd0IsWUFBVztBQUMvQixXQUFPakIsTUFBTWtCLElBQU4sQ0FBVztBQUFDVCxnQkFBVSxLQUFLQztBQUFoQixLQUFYLENBQVA7QUFDSCxHQUZEO0FBSUgsQ0FORCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL09iamV0byBUYXNrcyA9IGNvbGXDp8OjbyBNb25nbyBUYXNrc1xuVGFza3MgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIlRhc2tzXCIpO1xuIiwiTWV0ZW9yLm1ldGhvZHMoe1xuICAgIGFkZFRhc2s6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgVGFza3MuaW5zZXJ0KHt0YXNrTmFtZTogb2JqLnRhc2tOYW1lLCB0YXNrVXNlcjogdGhpcy51c2VySWQsIHRhc2tEYXRlOiBvYmoudGFza0RhdGV9KTtcbiAgICB9LFxuICAgIHJlbW92ZVRhc2s6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBUYXNrcy5yZW1vdmUoe19pZDogaWQsIHRhc2tVc2VyOiB0aGlzLnVzZXJJZH0pO1xuICAgIH1cbn0pO1xuIiwiTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cbiAgICBNZXRlb3IucHVibGlzaChcIlRhc2tzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gVGFza3MuZmluZCh7dGFza1VzZXI6IHRoaXMudXNlcklkfSk7XG4gICAgfSk7XG5cbn0pO1xuIl19
