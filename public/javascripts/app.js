angular.module('milarianApp', ['ui.router', 'ngResource', 'milarianApp.controllers', 'milarianApp.services']);

angular.module('milarianApp').config(function($stateProvider) {
  $stateProvider.state('vacancies', {
    url: '/vacancies',
    templateUrl: 'views/vacancy/list.html',
    controller: 'VacancyListController'
  }).state('viewVacancy', {
    url: '/vacancies/:id/',
    templateUrl: 'views/vacancy/show.html',
    controller: 'VacancyViewController'
  }).state('newVacancy', {
    url: '/vacancies/new',
    templateUrl: 'views/vacancy/new.html',
    controller: 'VacancyCreateController'
  }).state('editVacancy', {
    url: '/vacancies/:id/edit',
    templateUrl: 'views/vacancy/edit.html',
    controller: 'VacancyEditController'
  })

  .state('companies', {
    url: '/companies',
    templateUrl: 'views/company/list.html',
    controller: 'CompanyListController'
  }).state('viewCompany', {
    url: '/companies/:id/',
    templateUrl: 'views/company/show.html',
    controller: 'CompanyViewController'
  }).state('newCompany', {
    url: '/companies/new',
    templateUrl: 'views/company/new.html',
    controller: 'CompanyCreateController'
  }).state('editCompany', {
    url: '/companies/:id/edit',
    templateUrl: 'views/company/edit.html',
    controller: 'CompanyEditController'
  })

  .state('personals', {
    url: '/personals',
    templateUrl: 'views/personal/list.html',
    controller: 'PersonalListController'
  }).state('viewPersonal', {
    url: '/personals/:id/',
    templateUrl: 'views/personal/show.html',
    controller: 'PersonalViewController'
  }).state('newPersonal', {
    url: '/personals/new',
    templateUrl: 'views/personal/new.html',
    controller: 'PersonalCreateController'
  }).state('editUser', {
    url: '/personals/:id/edit',
    templateUrl: 'views/personal/edit.html',
    controller: 'PersonalEditController'
  });
}).run(function($state) {
  $state.go('vacancies');
});
