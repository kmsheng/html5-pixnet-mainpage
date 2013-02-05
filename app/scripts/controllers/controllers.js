'use strict';

define(['app', 'jquery'], function(app, $){

    app.controller('TodoCtrl', function($scope, $location){

        $scope.todos = [
            {text: 'learning angular', done: true},
            {text: 'build an angular app', done: false}
        ];

        $scope.books = [
            {title: 'title1', content: 'content1'},
            {title: 'title2', content: 'content2'}
        ];

        $scope.addTodo = function() {
            $scope.todos.push({text: $scope.todoText, done: false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        }

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo){
                if (!todo.done) $scope.todos.push(todo);
            });
        };

        $scope.delete = function() {
            $scope.todos = [];
        };

    });
});
