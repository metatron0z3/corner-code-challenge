'use strict';

/**
 * @ngdoc function
 * @name cornerCodeChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cornerCodeChallengeApp
 */
angular.module('cornerCodeChallengeApp')

  .config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })

  .factory('instagram', ['$http',
    function($http) {
      return {
        fetchFeed: function() {

          var endPoint = "https://www.instagram.com/JoinCornerstone/media";

          $http.jsonp(endPoint).success(function(response) {
            callback(response.data);
          })
          .error(function(xhr, status, err) {
            console.error(status, err);
          });

          // $http({
          //   method: 'GET',
          //   url: 'https://www.instagram.com/JoinCornerstone/media',
          //   headers: {
          //     "Access-Control-Allow-Origin": "*",
          //     "Access-Control-Allow-Headers": "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization",
          //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
          //   }
          // })
          // .then(function success(response) {
          //   console.log('response')
          //   console.log(response)
          //
          // }, function error(error) {
          //     console.log('error')
          //     console.log(error)
          //
          // });


        }
      }
    }
  ])

  .controller('MainCtrl', ['$scope', 'instagram',
    function ($scope, instagram) {

      $scope.data = {};
      $scope.pics = [];

      // Autocomplete test
      // $scope.jobs = JobRetreiver.getjobs("...");
      //   $scope.jobs.then(function(data){
      //     $scope.jobs = data;
      //   });
      //
      // $scope.getjobs = function(){
      //   return $scope.jobs;
      // }

      // Instagram Feed
      instagram.fetchFeed(function(data) {

        console.log('data')
        console.log(data)

        $scope.pics = data;

      });
    }
  ]);
