(function(){ // IIFE
'use strict';

// crear componente llamado 'categories': show all available categories to user
angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/templates/categories-list.template.html',
  bindings:{
    data: '<'
  }
});

})();    // END IIFE
