(function(){ // IIFE
'use strict';

// crear componente llamado 'categories': show all available categories to user
angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/categoriesList-component/categoriesList.template.html',
  bindings:{
    data: '<'
  }
});

})();    // END IIFE
