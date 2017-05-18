angular.module("app").service("mainSvc", function($http){
    
    this.test = "Working"

this.getData = function(){
    return $http.get("http://swapi.co/api/people/1/")
}
})