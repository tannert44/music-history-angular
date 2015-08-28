app.factory("getSongs", ["$scope", "$firebaseObject",
  function($scope, $firebaseObject, $loaded) {
    
     var ref = new Firebase("https://blazing-torch-6909.firebaseio.com/master-music");

     var obj = $firebaseObject(ref);

     return obj.$loaded()
  }
]);