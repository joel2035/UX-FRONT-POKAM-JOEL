var app = angular.module("myApp", []);

app.controller('appController', function($scope, $http, $location, $filter) {
  // réciperer les données depuis le serveur experne en utilisans l'extension cors de google;
  $http({

    method: 'GET',
    url: 'http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=P'

  }).then(function successCallback(response) {
    $scope.dossiers = response.data;
    // ajouter la saisir les mots saisir dans l'input à l'url

    var citieKey = "q";
    $scope.$watch(function() {
      return $location.search();
    }, function() {
      $scope.citie = $location.search()[citieKey] || "";
    });

    $scope.$watch('citie', function(citie) {
      $location.search(citieKey, citie);
    });
    var citiesKey = "q";
    $scope.$watch(function() {
      return $location.search();
    }, function() {
      $scope.cities = $location.search()[citiesKey] || "";
    });

    $scope.$watch('cities', function(cities) {
      $location.search(citiesKey, cities);
    });
    $scope.champTri = "unique_name";
    $scope.dossierCourant = null
    // pour vider le champ de recherche au moment du click

    $scope.razRecherche = function() {
      $scope.citie = null;
    };



    $http({
      method: 'GET',
      url: 'http://www-uat.tictactrip.eu/api/cities/popular/5'
    }).then(function successCallback(response) {
      $scope.values = response.data;
      // fusionné les deux tableaux
      var ville = angular.merge($scope.dossiers, $scope.values);
      $scope.ville = ville;


    }, function errorCallback(response) {
      alert('essayer une autre méthode celle ci ne marche pas');

    });


  }, function errorCallback(response) {
    alert('essayer une autre méthode celle ci ne marche pas');

  });
});