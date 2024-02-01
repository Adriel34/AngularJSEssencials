var app = angular.module("store-2", ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", { controller: "listController", templateUrl: "/2 step deep Link route/html/list.html" })
        .when("/edit/:name", {
            controller: "editController",
            templateUrl: "/2 step deep Link route/html/form.html",
        })
        .when("/new", { controller: "newController", templateUrl: "/2 step deep Link route/html/form.html"})
        .otherwise({ redirectTo: "/" });
}]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.frutas = ["banana", "maçã", "pera"];
}]);

app.controller('listController', ['$scope', function($scope){

}]);

app.controller('editController', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {
    $scope.title = 'Editar frutas';
    $scope.fruta = $routeParams.name;
    $scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);

    $scope.salvar = function () {
        $scope.frutas[$scope.frutaIndex] = $scope.fruta;
        $location.path('/');
    };
}]);

app.controller('newController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
  $scope.title = 'Nova fruta';
  $scope.fruta = '';

  $scope.salvar = function () {
      $rootScope.frutas.push($scope.fruta); // Adicionando uma nova fruta ao array no $rootScope
      $location.path('/');
  };
}]);



//otherwise -> Define a definição da rota que sera usada na mudança de rota se nenhuma rota e definida
//run: registro de trabalho que deve ser iniciado quando o injetor é feito carregando todos os modulos