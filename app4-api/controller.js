angular.module('apiApp')
.controller('apiCtrl', function ($scope , apiService) {

apiService.getMyData()
.then(function (result) {
  console.log(result);
  $scope.myData= result;
});
});
