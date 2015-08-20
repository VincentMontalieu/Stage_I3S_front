'use strict';

app.controller('AboutCtrl', function ($scope, $rootScope) {
  $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

  $("#technos img").hover(function () {
    $(this).css("opacity", 1);
  });

  $("#technos img").mouseleave(function () {
    $(this).css("opacity", 0.7);
  });
});
