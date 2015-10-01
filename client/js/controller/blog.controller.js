//var myBlogApp = angular.module('myBlogApp.controllers', []);

myBlogApp.controller('blogController', ['$scope', '$location', 'Blog', function ($scope, $location, Blog) {
    $scope.posts = [];
	Blog.getItems().then(function (data) {
        $scope.items = data.data.results
		for (var i = 0; i < data.data.results.length; i++) {
			var post = {
				title: data.data.results[i].title,
				content: data.data.results[i].content,
				author: data.data.results[i].author
			}
			$scope.posts.push(post)
		}
    }).catch(function (error) {
        alert('error');

    });
}]);