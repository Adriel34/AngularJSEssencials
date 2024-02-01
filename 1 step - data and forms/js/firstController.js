var app = angular.module("store", []);



app.controller("firstController", [
  "$scope",
  function ($scope) {
    $scope.user = { myName: "Adriel", myLastName: "Gonzaga" };

    $scope.Count = 0;

    $scope.addCount = function () {
      $scope.Count++;
    };

    $scope.people = ["Adriel", "Maria", "José", "Pedro"];
  },
]);
















