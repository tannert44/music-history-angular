app.controller("SongCtrl",[
  '$scope',
  '$location',
  '$firebaseArray',
  function($scope, $location, $firebaseArray) {
    $scope.songs
    
    var ref = new Firebase("https://blazing-torch-6909.firebaseio.com/master-music");

     var obj = $firebaseArray(ref);

     $scope.songs = obj;
  

  // $getSongs.then(function(data){
  //   console.log(data);  
  //   $scope.songs = data;
  // });

  $scope.newSong = function(){
    $location.path("songs/addSongs");
  }
      


  }
]);