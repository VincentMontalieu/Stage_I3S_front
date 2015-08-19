'use strict';

app.controller('RecogCtrl', function ($scope, $rootScope) {
  $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

  var readURL = function (input, $scope, $timeout) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#selectedImage').attr('src', e.target.result);
        $('#selectedImage').css("display", "block");
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $("#input-1").change(function () {
    readURL(this);
  });
});
