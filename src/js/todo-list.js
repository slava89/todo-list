(function() {
    'use strict';

    var app = angular.module('todo-list', []);

    app.controller('todoController', function() {
        this.tasks = todo;

        this.todoAdd = function() {
            this.tasks.push({
                desc: this.todoInput,
                done: false
            });
            this.todoInput = '';
        }
    });

    var todo = [{
        desc: 'Do Homework',
        done: false
    }, {
        desc: 'Do Homework',
        done: true
    }];


})();