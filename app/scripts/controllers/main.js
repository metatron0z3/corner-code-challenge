'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('test1App')

  .config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
  })

  .factory('instagram', ['$http',
    function($http) {
      return {
        fetchFeed: function() {

          // var config =

          // var endPoint = "https://www.instagram.com/JoinCornerstone/media";
          //
          // $http.jsonp(endPoint).success(function(response) {
          //   callback(response.data);
          // })
          // .error(function(xhr, status, err) {
          //   console.error(status, err);
          // });

          $http({
            method: 'GET',
            url: 'https://www.instagram.com/JoinCornerstone/media',
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization",
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
            }
          })
          .then(function success(response) {
            console.log('response')
            console.log(response)

          }, function error(error) {
              console.log('error')
              console.log(error)

          });


        }
      }
    }
  ])
  .controller('MainCtrl', ['$scope', 'instagram',
    function ($scope, instagram) {

      $scope.data = {};
      $scope.pics = [];

      instagram.fetchFeed(function(data) {

        console.log('data')
        console.log(data)

        $scope.pics = data;

      });
    }
  ]);
