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

  .state('users', {
    url: '/users',
    templateUrl: 'views/user/list.html',
    controller: 'UserListController'
  }).state('viewUser', {
    url: '/users/:id/',
    templateUrl: 'views/user/show.html',
    controller: 'UserViewController'
  }).state('newUser', {
    url: '/users/new',
    templateUrl: 'views/user/new.html',
    controller: 'UserCreateController'
  }).state('editUser', {
    url: '/users/:id/edit',
    templateUrl: 'views/user/edit.html',
    controller: 'UserEditController'
  });
}).run(function($state) {
  $state.go('vacancies');
});
