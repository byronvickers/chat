'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
var messageApp = angular.module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ]);

messageApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })

    $urlRouterProvider.otherwise('/');
  })

messageApp.controller('ChatCtrl', function ChatCtrl($scope, $firebaseArray, $firebaseObject, FirebaseUrl){

    var messagesRef = new Firebase(FirebaseUrl + 'messages');

    $scope.messages = $firebaseArray(messagesRef);

    $scope.submitMessage = function() {
      messagesRef.push({
        'author' : $scope.inputName,
        'content' : $scope.inputMessage
      });
      $scope.inputMessage = '';
    }
  })

messageApp.constant('FirebaseUrl', 'https://bv-chat.firebaseio.com/');
