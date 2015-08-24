'use strict';

app.controller('RecogCtrl', function ($scope, $rootScope, $http, CONSTANTS) {
  $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

  var imageURL = null;

  $http.get('assets/organs.json')
    .then(function (res) {
      $scope.organs = res.data;
    });

  $(document).ready(function () {
    $("#imageForm").ajaxForm({
      url: CONSTANTS.serverAddress + CONSTANTS.recogPath,
      dataType: 'json',
      success: function (data) {
        BootstrapDialog.show({
          message: data.data,
          buttons: [{
            icon: 'glyphicon glyphicon-send',
            label: 'Send ajax request',
            cssClass: 'btn-primary',
            autospin: true,
            action: function (dialogRef) {
            }
          }, {
            label: 'Close',
            action: function (dialogRef) {
              dialogRef.close();
            }
          }]
        });
      },
      error: function (error) {
        BootstrapDialog.show({
          message: "Erreur serveur... Merci de réessayer."
        });
      }
    });
  });

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

  $scope.analyzeImage = function () {
    if (imageURL != null && $scope.selectedOrgan != undefined) {
      $("#imageForm").submit();
    } else {
      BootstrapDialog.show({
        message: "Merci de sélectionner une image et de préciser un organe."
      });
    }
  };
});
