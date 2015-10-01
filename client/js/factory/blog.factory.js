//The action to call the parse service should be here.
var myBlogApp = angular.module('myBlogApp.services', ['ngRoute', 'ngResource']);

myBlogApp.factory('Blog', ['$http', function($http) {
    var reqHeaders = {
        "X-Parse-Application-Id": "6rZg6mtybKd1tbGtxIRJJj3D1haFGSa0ldA79buN",
        "X-Parse-REST-API-Key": "qTU8XwEM8kF3giEdtCc2dbNz6QW2aiVMQaiDuN2l",
        "Content-Type": "application/json"
    };

    var ParseFactory = {};
    ParseFactory.getItems = function() {

        return $http.get('https://api.parse.com/1/classes/blogPost/', { 
            headers: reqHeaders
            }
            .then(function(response) {
                // transform the promise of response into a promise of data
                return response.data;
            }));
    };
    
    ParseFactory.postItem = function(post) {
        
        //return $http.post...
    }
    
    return ParseFactory;
}]);
