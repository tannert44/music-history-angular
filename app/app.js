var app = angular.module("SongApp", ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      })
      .when('/songs/addSongs', {
        templateUrl: 'partials/add-form.html',
        controller: 'AddCtrl'
      })
    .otherwise({
        redirectTo: '/songs'
      });
  }]);