'use strict';

/**
 * @ngdoc overview
 * @name frontPlantsRecogApp
 * @description
 * # frontPlantsRecogApp
 *
 * Main module of the application.
 */

var app = angular.module('frontPlantsRecogApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']);
app.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })

    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })

    .when('/recog', {
      templateUrl: 'views/recog.html',
      controller: 'RecogCtrl',
      controllerAs: 'recog'
    })

    .otherwise({
      redirectTo: '/'
    });
});
