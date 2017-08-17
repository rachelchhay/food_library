const app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function($http){
  // redefine "this"
  const controller = this;

  // Create Food function
  this.createFood = function() {
    $http({
      method: 'POST',
      url: '/food',
      data: {
        name: this.name,
        sugar: this.sugar,
        calories: this.calories,
        carbs: this.carbs,
        fiber: this.fiber,
        type: this.type
      }
    }).then(function(response){
      controller.getFood();
    }, function(error){
      console.log(error);
    });
  }

  this.getFood = function(){
    $http({
      method: 'GET',
      url: '/food'
    }).then(function(response){
      controller.foundFood = response.data
    }, function(error){
      console.log(error);
    });
  }

  this.getFood();







// end of controller
}]);
