angular.module("arrayApp").controller("arrayController", function($scope, arrayService){
   
    $scope.test = "Controller Working"
    $scope.test1 = arrayService.test1

    $scope.recData = function(){
      $scope.employees = arrayService.getData()
      
    }
$scope.recData()
})