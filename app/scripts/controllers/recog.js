'use strict';

app.controller('RecogCtrl', function ($scope, $rootScope, $http, RecogFactory) {
  $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

  var imageURL = null;
  var json_to_send = {
    image: "image",
    organ: "organ"
  };

  var readURL = function (input, $scope, $timeout) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        imageURL = e.target.result;
        $('#selected-image').attr('src', imageURL);
        $('#selected-image').css("display", "block");
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $("#input-1").change(function () {
    readURL(this);
  });

  $http.get('assets/organs.json')
    .then(function (res) {
      $scope.organs = res.data;
    });

  $scope.analyzeImage = function () {
    if (imageURL != null && $scope.selectedOrgan != undefined) {
      BootstrapDialog.show({
        message: $scope.selectedOrgan
      });
    } else {
      BootstrapDialog.show({
        message: "Merci de sélectionner une image et de préciser un organe."
      });
    }
  }
});
