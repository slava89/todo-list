(function() {
    'use strict';

    var app = angular.module('todo-list', []);

    app.controller('todoController', function() {
        this.tasks = todo;
    });

    var todo = [{
        desc: 'Do Homework',
        done: false
    }, {
        desc: 'Do Homework',
        done: true
    }];

})();