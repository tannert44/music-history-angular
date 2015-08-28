app.controller("SongCtrl",[
  "$scope",
  "$location",
  "getSongs", 
  function($scope, $location, $getSongs) {

    $scope.songs;

    console.log($getSongs)

  // $getSongs.then(function(data){
  //   console.log(data);  
  //   $scope.songs = data;
  // });

  $scope.newSong = function(){
    $location.path("songs/addSongs");
  }
      


  }
]);