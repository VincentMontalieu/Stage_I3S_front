'use strict';

app.controller('RecogCtrl', function ($scope, $rootScope, $http, CONSTANTS, $anchorScroll, $location, $timeout) {
  $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

  var imageURL = null;
  var imageDialog;

  $http.get('assets/organs.json')
    .then(function (res) {
      $scope.organs = res.data;
    });

  $(document).ready(function () {
    $("#imageForm").ajaxForm({
      url: CONSTANTS.serverAddress + CONSTANTS.recogPath,
      dataType: 'json',
      success: function (data) {
        imageDialog.close();
        $scope.$apply(function () {
          $scope.responses = data.data;
        });
      },
      error: function (error) {
        BootstrapDialog.closeAll();
        BootstrapDialog.show({
          type: BootstrapDialog.TYPE_DANGER,
          title: "ERREUR",
          message: "Merci de réessayer."
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
      imageDialog = BootstrapDialog.show({
        closable: false,
        title: "ANALYSE DE VOTRE PHOTO",
        message: function(dialogRef) {
          var $message = $('<div><p>Envoi de la photo terminé.</p></div><div><p>Analyse de la photo en cours...</p></div><div style="text-align: center"><i class="fa fa-spinner fa-pulse fa-4x"></i></div>');
          return $message;
        }
      });
    } else {
      BootstrapDialog.show({
        type: BootstrapDialog.TYPE_WARNING,
        title: "ATTENTION",
        message: "Merci de sélectionner une image et de préciser un organe."
      });
    }
  };
});
