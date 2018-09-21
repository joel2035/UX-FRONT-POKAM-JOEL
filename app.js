var app = angular.module("myApp", []);
app.controller('appController', function($scope, $http, $location, ) {
  $http({
    method: 'GET',
    url: 'http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=P'

  }).then(function successCallback(response) {
    $scope.dossiers = response.data;
    var citieKey = "q";
    $scope.$watch(function() {
      return $location.search();
    }, function() {
      $scope.citie = $location.search()[citieKey] || "";
    });

    $scope.$watch('citie', function(citie) {
      $location.search(citieKey, citie);
    });


  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  // $scope.dossierCourant = null;
  // $scope.selectionDossier = function(dossier) {
  //   $scope.dossierCourant = dossier;
  //
  // }
  // $scope.$watch = (function() {
  //   return $location.path()
  // }, function(newPath) {
  //   var tabPath = newPath
  // });
  //

});