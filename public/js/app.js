const app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function($http){
  // redefine "this"
  const controller = this;
  // Used to edit
  this.indexOfEdit = 1;

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

  // Get Food function
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

  // Edit Food item
  this.editFood = function(food){
    $http({
      method: 'PUT',
      url: '/food/' + food._id,
      data: {
        name: this.updatedName,
        sugar: this.updatedSugar,
        calories: this.updatedCalories,
        carbs: this.updatedCarbs,
        fiber: this.updatedFiber,
        type: this.updatedType
      }
    })
  }







// end of controller
}]);
