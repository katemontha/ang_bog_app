creaturesService.$inject = ["$http"];

function creaturesService($http) {
    const service = this;

    service.getCreatures = function() {
        return $http.get("/creatures").then(res => res.data);
    };

    service.getArtist = function(id) {
        return $http.get("/artist/" + id).then(res => {
            return res.data;
        });
    };

    service.saveArtist = function(newArtist) {
        return $http.post("/artist", newArtist).then(res => {
            return res.data;
        });
    };

    return service;
}

angular.module("BogApp").service("creaturesService", creaturesService);