var app = angular.module("App", []);

app.controller("controller1", [
  "$scope",
  function ($scope) {
    $scope.nombre = "Alexander";
    $scope.nombresSimple = ["Juan", "Betoben", "Max"];
    $scope.heroes = [
      { name: "Alexander", lastname: "Machado" },
      { name: "Cristian", lastname: "Martines" },
      { name: "Juanito", lastname: "Perez" },
      { name: "Awebo", lastname: "loco" },
      { name: "Awebo", lastname: "loco" },
      { name: "Awebo", lastname: "loco" },
      { name: "Coco", lastname: "loco" },
    ];
  },
]);
