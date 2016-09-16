// Adding the IIFE (inmediatly invoked function expression)
(function(){
// Use strict for avoiding some problems
'use strict';

// Declaring the app module and registering controllers and services
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// TO BUY CONTROLLER ###################################################
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var toBuyList = this;
  var SLService = ShoppingListCheckOffService;

  toBuyList.items = SLService.getToBuyItems();

  toBuyList.itemBought = function(itemIndex){
    SLService.addItemToBoughtList(itemIndex);
    SLService.removeItemFromToBuyList(itemIndex);
  };

};
//----------------------------------------------------------------------

// BOUGHT CONTROLLER ##################################################
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var boughtList = this;
  var SLService = ShoppingListCheckOffService;

  boughtList.items = SLService.getBoughtItems();

};
//----------------------------------------------------------------------

// SERVICE FUNCTION ##################################################
function ShoppingListCheckOffService(){
  var service = this;
  // toBuy and bought itmes in 2 separate arrays
  var toBuyItems = [
    {name:'apples', quantity:5},
    {name:'eggs', quantity:8},
    {name:'milk bottles', quantity:3},
    {name:'carrots', quantity:7},
    {name:'rice bags', quantity:2}
  ];
  var boughtItems =[];

  // Service methods
  service.getToBuyItems = function(){
    return toBuyItems;
  };
  service.getBoughtItems = function(){
    return boughtItems;
  };
  service.removeItemFromToBuyList = function(itemIndex){
    toBuyItems.splice(itemIndex, 1);
  };
  service.addItemToBoughtList = function(itemIndex){
    boughtItems.push(toBuyItems[itemIndex]);
  };
// ---------------------------------------------------------------------
};


})();
