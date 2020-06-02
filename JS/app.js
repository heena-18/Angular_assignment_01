(function() { 
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.input = "";
        $scope.message = "";
        $scope.stack = function() {
            // already can access $scope.input
            // dont need to pass to stack()

            	
            var array = $scope.input.split(',');

            // set $scope.message
            // instead of returning String
           if(array== "") {
           	$scope.message = "Please check the input first";
           }
            else if (array.length < 4) {
                $scope.message = "Enjoy";
            } 
            else {
                $scope.message = "Too Much!";
            }
        };
    }
})();