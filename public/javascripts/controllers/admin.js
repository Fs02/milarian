angular.module('milarianApp.controllers', []).controller('VacancyListController', function($scope, $state, popupService, $window, Vacancy) {
  $scope.vacancies = Vacancy.query();

  $scope.deleteVacancy = function(vacancy) {
    if (popupService.showPopup('Really delete this?')) {
      vacancy.$delete(function() {
        $window.location.href = '';
      });
    }
  };
}).controller('VacancyViewController', function($scope, $stateParams, Vacancy) {
  $scope.vacancy = Vacancy.get({ id: $stateParams.id });
}).controller('VacancyCreateController', function($scope, $state, $stateParams, Vacancy) {
  $scope.vacancy = new Vacancy();

  $scope.addVacancy = function() {
    $scope.vacancy.$save(function() {
      $state.go('vacancies');
    });
  };
}).controller('VacancyEditController', function($scope, $state, $stateParams, Vacancy) {
  $scope.updateVacancy = function() {
    $scope.vacancy.$update(function() {
      $state.go('vacancies');
    });
  };

  $scope.loadVacancy = function() {
    $scope.Vacancy = Vacancy.get({ id: $stateParams.id });
  };

  $scope.loadVacancy();
});
