(function(){ // IIFE
'use strict';

// crear componente llamado 'categories': show all available categories to user
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'templates/categories.template.html',
  bindings:{
    categories: '<'
  }
});

})();    // END IIFE
