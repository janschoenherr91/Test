'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */


app
    .controller('MainCtrl', ['$scope', 'firebase' , function($scope, firebase)
            {

                $scope.users = firebase.readtodb();

                $scope.addUser = function() {
                    $scope.users = firebase.writetodb();
                };

                $scope.delUser = function() {
                    $scope.users = firebase.deletedb();
                };

                $scope.delete = function(key)
                {
                   // console.log(key);
                    var itemRef = new Firebase("https://intense-torch-6714.firebaseio.com" + '/' + key);
                    itemRef.remove();
                }

            }
    ]);

