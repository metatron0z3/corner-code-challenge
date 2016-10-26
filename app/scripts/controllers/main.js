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

  .controller('MainCtrl',
    ['$scope', '$http', '$sce',
      function ($scope, $http, $sce) {

        $scope.data = {};
        $scope.pics = [];

        var endPoint = 'https://www.instagram.com/joincornerstone/media';

        $sce.trustAsResourceUrl(endPoint);

        $http.jsonp(
          endPoint,
          {param: {jsonpCallbackParam: 'angular.callbacks._0'}})
        .then(function(response) {
          console.log('response')
          console.log(response)

          $scope.data = response.data;

          console.log('response.data')
          console.log(response.data)
        })
        .catch(function(xhr) {
          console.error(xhr);
        });

      }
    ]
  );
