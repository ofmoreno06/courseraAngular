(function(){
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

itemsController.$inject = ['MenuDataService', 'items'];
function itemsController(MenuDataService, items){
  var itemsCtrl = this;

  itemsCtrl.items = items.menu_items;
  itemsCtrl.category = items.category;
  console.log(itemsCtrl.category);

  itemsCtrl.muestra = function(){
    console.log(itemsCtrl.items);
  }




}

})();
