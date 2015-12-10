angular.module('milarianApp.controllers').controller('PersonalListController', function($scope, $state, popupService, $window, Personal) {
  $scope.personals = Personal.query();

  $scope.deletePersonal = function(personal) {
    if (popupService.showPopup('Really delete this?')) {
      personal.$delete(function() {
        $window.location.href = '';
      });
    }
  };
}).controller('PersonalViewController', function($scope, $stateParams, Personal) {
  $scope.personal = Personal.get({ id: $stateParams.id });
}).controller('PersonalCreateController', function($scope, $state, $stateParams, Personal) {
  $scope.personal = new Personal();

  $scope.addPersonal = function() {
    $scope.personal.$save(function() {
      $state.go('personals');
    });
  };
}).controller('PersonalEditController', function($scope, $state, $stateParams, Personal) {
  $scope.updatePersonal = function() {
    $scope.personal.$update(function() {
      $state.go('personals');
    });
  };

  $scope.loadPersonal = function() {
    $scope.Personal = Personal.get({ id: $stateParams.id });
  };

  $scope.loadPersonal();
});
