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



            }
    ]);

