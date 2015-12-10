angular.module('milarianApp.services', []).factory('Vacancy', function($resource) {
  return $resource('https://milarian.herokuapp.com/backdoor/vacancies/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  })
}).factory('Company', function($resource) {
  return $resource('https://milarian.herokuapp.com/backdoor/companies/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  })
}).factory('Personal', function($resource) {
  return $resource('https://milarian.herokuapp.com/backdoor/personals/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  })
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
