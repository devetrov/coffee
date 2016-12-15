'use strict';

angular.
	module('addReview').
	component('addReview', {
		templateUrl: 'add-review/add-review.form.html',
		controller: function addReviewController($scope, $http) {
			$scope.reviews = [];
			$scope.addReview = function(review){
				$http.post('scripts/addReview.php', $scope.review)
					.then(function(){});
				$scope.reviews.push({
					text: $scope.review.text
				});
				$scope.review = {};
			};
		}
	});


