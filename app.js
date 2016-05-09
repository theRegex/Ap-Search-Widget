var apSearch = angular.module('rp-app', ['ui.router'])



apSearch.service('apCall', function($http, $q) {
    var apCall = this;
    apCall.api = null;

    apCall.processRequestedLocation = function(location) {
        var defer = $q.defer();

        $http.get("/ap-search/server.php")
            //$scope.showLoading();
            .success(function(res) {

                apCall.api = res;
                var cResponse = JSON.stringify(res);
           

                defer.resolve(res);
                //$scope.enLoading();
            }).error(function(err, status) {
                defer.reject(err)
                console.log("Error in getting requested location!::" + err + "" + status)
            })

        return defer.promise;


    }

    return apCall;
})


apSearch.controller('rootController', ['$scope', function($scope, apCall) {

}])
