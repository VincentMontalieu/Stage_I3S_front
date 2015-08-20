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
      controller: 'MainCtrl'
    })

    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })

    .when('/recog', {
      templateUrl: 'views/recog.html',
      controller: 'RecogCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });
});

app.run(function ($rootScope, $location) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    if (next.$$route.originalPath == "/recog") {
      $("#body").css("max-width", "1100px");
    } else {
      $("#body").css("max-width", "720px");
    }
  });
});
