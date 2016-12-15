'use strict';

angular.
	module('reviewList').
	component('reviewList', {
		templateUrl: 'review-list/review-list.reviews.html',
		controller: function reviewListController($http) {
			var self = this;
			$http.get('reviews/reviews.json').then(function(response) {
				self.reviews = response.data; 
			});
		}	
	});
