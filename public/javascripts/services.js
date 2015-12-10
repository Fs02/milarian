angular.module('milarianApp.services', []).factory('Vacancy', function($resource) {
  return $resource('https://milarian.herokuapp.com/vacancies/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  }).factory('Vacancy', function($resource) {
  return $resource('https://milarian.herokuapp.com/companies/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  }).factory('Vacancy', function($resource) {
  return $resource('https://milarian.herokuapp.com/users/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
