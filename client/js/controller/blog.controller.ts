var myBlogApp = angular.module('myBlogApp.controllers', []);

// GET
myBlogApp.controller('blogController', ['$scope', '$location', 'Blog', function ($scope, $location, Blog) {
    $scope.posts = [];
	Blog.query().$promise.then(function (data) {
        $scope.items = data.results
		angular.forEach(data.results, function (item) {
			var post = {
				title: item.title,
				content: item.content,
				author: item.author
			}
			$scope.posts.unshift(post)
		})
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
		Blog.save(postData).$promise
			.then(function () {
				$location.path('/');
			}).catch(function (err) {
				console.log(err);
			})
	}
}]);