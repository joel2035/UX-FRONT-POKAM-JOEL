var app = angular.module("myApp", []);

app.controller('appController', function($scope, $http, $location, $filter) {
  $http({

    method: 'GET',
    url: 'http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=P'

  }).then(function successCallback(response) {
    $scope.dossiers = response.data;
    // ajouter la saisir les mots saisir dans l'input à l'url
    var ville = angular.extend({}, $scope.dossiers, $scope.values);
    var citieKey = "q";
    $scope.$watch(function() {
      return $location.search();
    }, function() {
      $scope.citie = $location.search()[citieKey] || "";
    });

    $scope.$watch('citie', function(citie) {
      $location.search(citieKey, citie);
    });
    $scope.champTri = "unique_name";
    $scope.dossierCourant < 1;
    // pour vider le champ de recherche au moment du click

    $scope.razRecherche = function() {
      $scope.citie = null;
    };

    // filtré les pays

    $http({
      method: 'GET',
      url: 'http://www-uat.tictactrip.eu/api/cities/popular/5'
    }).then(function successCallback(response) {
      $scope.values = response.data;

      var ville = $scope.dossiers.flatMap(function(x, y) {
        return [x, $scope.values[y]]
      })
      $scope.ville = ville

      console.log($scope.ville);
      // ajouter la saisir les mots saisir dans l'input à l'url
      // $scope.ville = $scope.dossiers.concat($scope.values);
      // $scope.citie = "";
      // $scope.filterDossier = function() {
      //   return $scope.dossiers.filter(function(item) {
      //     return (item.local_name.toString().indexOf($scope.citie) > -1)
      //   });
      // };

    }, function errorCallback(response) {
      alert('essayer une autre méthode celle ci ne marche pas');

    });


  }, function errorCallback(response) {
    alert('essayer une autre méthode celle ci ne marche pas');

  });
});