var myBlogApp = angular.module('myBlogApp.controllers', []);

// GET
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
			$scope.posts.unshift(post)
		}
    }).catch(function (error) {
        alert('error');
    });
	// switches page view
	$scope.createPost = function () {
		$location.path('/newpost');
	}
}]);

// POST
myBlogApp.controller('writeBlogController', ['$scope', '$location', 'Blog', function ($scope, $location, Blog) {
	
	$scope.newPost = function () {
		var post = {
			title: $scope.title,
			author: $scope.author,
			content: $scope.content
		}
		var postData = JSON.stringify(post);
		Blog.postItems(postData)
			.then(function () {
				$location.path('/');
			}).catch(function (err) {
				console.log(err);
			})
	}
}]);