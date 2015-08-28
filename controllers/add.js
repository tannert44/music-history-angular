app.controller("AddCtrl",[
  '$scope',
  '$location',
  '$firebaseArray',
  function($scope, $location, $firebaseArray) {
    
    var ref = new Firebase("https://blazing-torch-6909.firebaseio.com/master-music");

    var obj = $firebaseArray(ref);

  obj.$add({ foo: "bar" }).then(function(ref) {
  var id = ref.key();
  console.log("added record with id " + id);
  list.$indexFor(id); // returns location in the array
});


  }
]);