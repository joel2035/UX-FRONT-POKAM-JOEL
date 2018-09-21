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
    alert('essayer une autre méthode celle ci ne marche pas');

  });



});