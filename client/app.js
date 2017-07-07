const angular = require('angular');
require("angular-ui-router");

angular.module('BogApp', []);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            template: "<creatures></creatures>"
        });

    $urlRouterProvider.otherwise("/");
}