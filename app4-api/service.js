angular.module('apiApp')
.service('apiService' ,function ($http) {


  baseUrl = "http://swapi.co/api/people"

  this.getMyData = function() {
    var promise = $http.get(baseUrl)
    .then(function (response) {
      if (response.status === 200) {
        return response.data.results
      }
      else {
        console.log(response);
      }


    })
    return promise
  }



})
