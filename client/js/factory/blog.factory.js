var myBlogApp = angular.module('myBlogApp.factories', ['ngRoute', 'ngResource']);

myBlogApp.factory('Blog', ['$http', function($http) {
    var reqHeaders = { headers:  {
        "X-Parse-Application-Id": "6rZg6mtybKd1tbGtxIRJJj3D1haFGSa0ldA79buN",
        "X-Parse-REST-API-Key": "qTU8XwEM8kF3giEdtCc2dbNz6QW2aiVMQaiDuN2l",
        "Content-Type": "application/json"
    }};

    var ParseFactory = {};
    ParseFactory.getItems = function() {

        return $http.get('https://api.parse.com/1/classes/blogPost/', reqHeaders);
    };
    
    ParseFactory.postItems = function(data) {
        return $http.post('https://api.parse.com/1/classes/blogPost/', data, reqHeaders);
    }
  return ParseFactory;
}]);