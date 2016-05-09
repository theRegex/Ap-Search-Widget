apSearch.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/list');
	$stateProvider
	.state('/list',{
		url: "/list",
		templateUrl : "/ap-search/partials/list.html",
		controller : 'list',
		
	})
	.state('/map',{
		url: "/map",
		templateUrl : "/ap-search/partials/map.html",
		controller: 'map',
	})
	.state('/photo',{
		url: "/photo",
		templateUrl : "/ap-search/partials/photo.html",
		controller: 'photo'

	})
	
 //last edits made here
})