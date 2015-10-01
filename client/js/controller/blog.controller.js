//Logic for page actions here. 

var myBlogApp = angular.module('myBlogApp.controllers', []);

myBlogApp.controller('myController', ['$scope', 'Blog', function ($scope, Blog) {
    Blog.getItems().then(function (data) {
        $scope.items = data;
    }).catch(function () {
        alert('error');

    });
}]);

//myBlogApp.controller('someOtherController')


/*  -- from walter --
var app = angular.module('myApp.controllers', ['ngRoute']);

app.controller('SampleController', ['$scope', 'Blog', function($scope, Blog){
    $scope.posts = [];
    Blog.getItems().then(function(blogPosts) {
        blogPosts.forEach(function(post) {
            $scope.posts.unshift(post);
        });
        // for (var i = 0; i < blogPosts.length; i++ ){
        //     $scope.posts.push(blogPosts[i]);
        // }
    });
}]);
*/