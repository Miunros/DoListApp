angular.module('toDoListApp', [])
  .controller('toDoListCtrl', function() {
    var self = this;
  
    self.tasks = [
      {
        text: 'task1 text',
        isDone: false
      },
      {
        text: 'task2 text',
        isDone: true
      }
    ];
  
    self.add = function() {
      var task = {
        text: self.newItemText,
        isDone: false
      };
      
      self.tasks.push(task);
      self.newItemText = '';
    };
  
    self.getRemainingNum = function() {
      var count = 0;
      
      for (var i = 0; i < self.tasks.length; i++) {
        if (!self.tasks[i].isDone) {
          count++;
        }
      }
      
      return count;
    };
  
    self.archive = function() {
      var tmpTasks = self.tasks;
      self.tasks = [];
      
      for (var i = 0; i < tmpTasks.length; i++) {
        if (!tmpTasks[i].isDone) {
          self.tasks.push(tmpTasks[i]);
        }
      }
    };
  
  });
