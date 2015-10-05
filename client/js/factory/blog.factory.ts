var myBlogApp = angular.module('myBlogApp.factories', ['ngRoute', 'ngResource']);

myBlogApp.factory('Blog', ['$resource', function ($resource: ng.resource.IResourceService) {
    var reqHeaders = {
        "X-Parse-Application-Id": "6rZg6mtybKd1tbGtxIRJJj3D1haFGSa0ldA79buN",
        "X-Parse-REST-API-Key": "qTU8XwEM8kF3giEdtCc2dbNz6QW2aiVMQaiDuN2l",
        "Content-Type": "application/json"
    };

     var User = $resource('https://api.parse.com/1/classes/blogPost/', {},
      {
        'query': {
            headers: reqHeaders,
        },
        'save': {
            method: 'POST',
            headers: reqHeaders
        },
    });

    return User;
}]);