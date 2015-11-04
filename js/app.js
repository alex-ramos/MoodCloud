'use strict';

var BASE_URL = 'https://api.soundcloud.com'; //website we fetch information from
var CLIENT_ID = 'e02137ad94180a84a2daac1879987f05' //application ID for requests
//   SC.initialize({
//     client_id: 'e02137ad94180a84a2daac1879987f05',
//   });
//  var track_url = 'http://soundcloud.com/forss/flickermood';
// SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
//   console.log('oEmbed response: ', oEmbed);
// });

var myApp = angular.module('myApp', [])
  .controller('MyCtrl', ['$scope', '$http', function($scope, $http) { 
   $scope.getTracks = function() {
   	  //var limit = parseInt($scope.pLength);
      var request = BASE_URL + '/tracks' + '?' +'client_id='+ CLIENT_ID + '&tags=' + $scope.mood + '&limit=' + $scope.pLength; //build the RESTful request
      $http.get(request) //Angular AJAX call
        .then(function (response) {
          $scope.tracks = response.data; //save results to available model
          //console.log(response.data)
        });
    };
}])

  var load = function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe),
        newSoundUrl = 'http://api.soundcloud.com/tracks/13692671';

    widget.bind(SC.Widget.Events.READY, function() {
      // load new widget
      widget.bind(SC.Widget.Events.FINISH, function() {
        widget.load(newSoundUrl, {
          show_artwork: false
        });
      });
    });

  }();



// To do:

// 1. Get songs to play
// 2. Connect thesarus (if time)
// 3. complete README
// 4. check spec, comment
// 5s. commit to github, push to website
