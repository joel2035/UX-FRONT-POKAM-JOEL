app.service('country', function($q) {

  // some data for the table

  $scope.all = function(filterObject) {

    // This service acts like it called $http.get and returned the resulting
    // proimse. Really it just builds a promise around some mock data.
    var defer = $q.defer();

    var result = [];
    for (var i = 0; i < $scope.dossiers.length; i++) {
      if (filterObject.author != '' && $scope. [i].author.toLowerCase().indexOf(filterObject.author.toLowerCase()) == -1) {
        continue;
      }
      if (filterObject.title != '' && $scope.dossiers[i].title.toLowerCase().indexOf(filterObject.title.toLowerCase()) == -1) {
        continue;
      }
      result.push($scope.dossiers[i]);
    }
    defer.resolve(result);

    return defer.promise;
  };

});