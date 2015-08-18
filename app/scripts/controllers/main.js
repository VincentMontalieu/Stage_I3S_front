'use strict';

app.controller('MainCtrl', function ($scope, $rootScope) {
  $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

  $("header li").click(function () {
    $("header li").removeClass("active");
    $(this).addClass("active");
  });

  $(".navbar-brand").click(function () {
    $("header li").removeClass("active");
    $("#home").addClass("active");
  })
});
