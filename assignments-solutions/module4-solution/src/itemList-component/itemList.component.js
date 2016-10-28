(function(){ // IIFE
'use strict';

// create component called 'items' that shows all menu items for a category.
angular.module('MenuApp')
.component('items',{
  templateUrl: 'src/itemList-component/itemList.template.html',
  bindings: {
     data: '<'
  }
});

})();    // END IIFE
