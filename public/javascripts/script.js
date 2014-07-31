var activeLink = "";
const MAIN_HEIGHT = "20%";
const MAIN_WIDTH = "20%"
var original = $('.navBar');

$( document ).ready(function() {
var currentSection = "info";

angular.module('mealApp', [])
    .controller('mealController', ['$scope', 'mealFactory', function ($scope, mealFactory) {
    $scope.recipes = mealFactory.recipes;
    $scope.selectedMeals = [];
    $scope.text = '';
    $scope.openMenu = false;
    var pagesShown = 1;
	var pageSize = 8;
	    
    $scope.paginationLimit = function(data) {
        return pageSize * pagesShown;
    };

    $scope.hasMoreItemsToShow = function() {
		return pagesShown < ($scope.recipes.length / pageSize);
	};

	$scope.showMoreItems = function() {
        pagesShown = pagesShown + 1;       
    };

    $scope.selectMeal = function(meal) {
  		$scope.selectedMeal = meal;
 	 	$scope.showModal = true;
 	 	$scope.showInfoSection = true;
 	 	$('.modalContainer').css('background-image', 'url(' + $scope.selectedMeal.url + ')');
 	 	welcomeModal();
	};

	$scope.dissmisModalView = function(linkName){
		dissmisModal();
		$scope.showModal = false;
		resetAndshow(linkName);

	}

	$scope.showInfo = function(linkName) {
 	 	resetAndshow(linkName);
		changeTabBarIndicatorto(linkName);
	};

	$scope.showIngredient = function(linkName) {
		resetAndshow(linkName);
		changeTabBarIndicatorto(linkName);
	};

	$scope.showMethod = function(linkName) {
		resetAndshow(linkName);
		changeTabBarIndicatorto(linkName);
	};

	$scope.showShare = function(linkName) {
		resetAndshow(linkName);
		changeTabBarIndicatorto(linkName);
	};

	$scope.Userconfig = 
	[
		{
			"radio":[
				{
					"value":"Bike",
					"name" :"vehicle",
					"color" :"blue"
				},

				{
					"value":"Car",
					"name" :"vehicle",
					"color":"red"
				},

				{
					"value":"Bus",
					"name" :"vehicle",
					"color" :"blue"
				},

				{
					"value":"Train",
					"name" :"vehicle",
					"color":"red"
				}
			],

			"text":[
				{
					"value":"old Roger",
					"name" :"hello",
					"style" :"color:white;"
				}
			]

		},
	]

	$scope.Usersettings = ["radio","text"];


	/*
	[
		{
			"data":
			[
				{
					"divtype": "input",
					"type":"radio",
					"style":"margin:5px; color:green;",
					"text":"Breakfast",
					"divStyle":"color:white"
				},

				{
					"divtype": "input",
					"type":"radio",
					"style":"margin:5px; color:green;",
					"text":"Breakfast",
					"divStyle":"color:white"
				}
			]
		},

		{
			"divtype": "nolove",
		}
	]
*/

	function resetAndshow(linkName){
		if(linkName == "#infoLink"){
			$scope.showInfoSection = true;
		}else{
			$scope.showInfoSection = false;
		}

		if(linkName == "#ingredientsLink"){
			$scope.showIngredientSection = true;
		}else{
			$scope.showIngredientSection = false;
		}

		if(linkName == "#methodLink"){
			$scope.showMethodSection = true;
		}else{
			$scope.showMethodSection = false;
		}

		if(linkName == "#shareLink"){
			$scope.showShareSection = true;
		}else{
			$scope.showShareSection = false;
		}
	}

}])
    .factory('mealFactory', [function () {
    return {
        recipes:[
    {
	  "type": "Breakfast",
	  "title": "Chili con carne",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 12,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/bc0ea7c5f95701bff499f78b59d23e68/tumblr_mr74z9Lt3O1rs0z5go1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a medium sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Spicy Indomie",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 30,
	  "level":"hot",
	  "url":"http://38.media.tumblr.com/875b5eeb5b1efa37d2e9d36fbad836d3/tumblr_mzczesVrZD1rimr6yo1_1280.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Prawn Vegs",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 25,
	  "level":"medium",
	  "url":"http://38.media.tumblr.com/23f5902bec9d2f6f600043a7fb594a6b/tumblr_n8ykd5t78n1rzwv55o1_500.png",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "skewer",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 2,
	  "duration": 20,
	  "level":"hot",
	  "url":"http://31.media.tumblr.com/tumblr_m1t5wqIm9g1qbih6so1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "Vegetable bhaji salad",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 15,
	  "level":"hot",
	  "url":"http://s9.favim.com/orig/130818/-_-food-pancake-Favim.com-858765.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Dessert",
	  "title": "Caramel fudge",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 1,
	  "duration": 50,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/246db30925693c42cc88e2e3b4cd8f39/tumblr_n3rn31akff1qzk4ruo1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Side dish/snack",
	  "title": "Mixed veg",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 5,
	  "level":"sweet",
	  "url":"http://33.media.tumblr.com/29cee3f9474c8d8de183f5027bb35a06/tumblr_ms11l8E3Ml1rzwv55o1_500.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Beverage",
	  "title": "Spicy HamBurger",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 32,
	  "level":"hot",
	  "url":"http://37.media.tumblr.com/51bedc9e7334de555c1b00dd3ed8cf22/tumblr_mo9e0eI0fa1riu320o1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	 {
	  "type": "Breakfast",
	  "title": "Chili con carne",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 12,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/bc0ea7c5f95701bff499f78b59d23e68/tumblr_mr74z9Lt3O1rs0z5go1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a medium sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Spicy Indomie",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 30,
	  "level":"hot",
	  "url":"http://38.media.tumblr.com/875b5eeb5b1efa37d2e9d36fbad836d3/tumblr_mzczesVrZD1rimr6yo1_1280.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Prawn Vegs",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 25,
	  "level":"medium",
	  "url":"http://38.media.tumblr.com/23f5902bec9d2f6f600043a7fb594a6b/tumblr_n8ykd5t78n1rzwv55o1_500.png",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "skewer",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 2,
	  "duration": 20,
	  "level":"hot",
	  "url":"http://31.media.tumblr.com/tumblr_m1t5wqIm9g1qbih6so1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "Vegetable bhaji salad",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 15,
	  "level":"hot",
	  "url":"http://s9.favim.com/orig/130818/-_-food-pancake-Favim.com-858765.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Dessert",
	  "title": "Caramel fudge",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 1,
	  "duration": 50,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/246db30925693c42cc88e2e3b4cd8f39/tumblr_n3rn31akff1qzk4ruo1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Side dish/snack",
	  "title": "Mixed veg",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 5,
	  "level":"sweet",
	  "url":"http://33.media.tumblr.com/29cee3f9474c8d8de183f5027bb35a06/tumblr_ms11l8E3Ml1rzwv55o1_500.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Beverage",
	  "title": "Spicy HamBurger",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 32,
	  "level":"hot",
	  "url":"http://37.media.tumblr.com/51bedc9e7334de555c1b00dd3ed8cf22/tumblr_mo9e0eI0fa1riu320o1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	 {
	  "type": "Breakfast",
	  "title": "Chili con carne",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 12,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/bc0ea7c5f95701bff499f78b59d23e68/tumblr_mr74z9Lt3O1rs0z5go1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a medium sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Spicy Indomie",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 30,
	  "level":"hot",
	  "url":"http://38.media.tumblr.com/875b5eeb5b1efa37d2e9d36fbad836d3/tumblr_mzczesVrZD1rimr6yo1_1280.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Prawn Vegs",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 25,
	  "level":"medium",
	  "url":"http://38.media.tumblr.com/23f5902bec9d2f6f600043a7fb594a6b/tumblr_n8ykd5t78n1rzwv55o1_500.png",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "skewer",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 2,
	  "duration": 20,
	  "level":"hot",
	  "url":"http://31.media.tumblr.com/tumblr_m1t5wqIm9g1qbih6so1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "Vegetable bhaji salad",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 15,
	  "level":"hot",
	  "url":"http://s9.favim.com/orig/130818/-_-food-pancake-Favim.com-858765.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Dessert",
	  "title": "Caramel fudge",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 1,
	  "duration": 50,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/246db30925693c42cc88e2e3b4cd8f39/tumblr_n3rn31akff1qzk4ruo1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Side dish/snack",
	  "title": "Mixed veg",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 5,
	  "level":"sweet",
	  "url":"http://33.media.tumblr.com/29cee3f9474c8d8de183f5027bb35a06/tumblr_ms11l8E3Ml1rzwv55o1_500.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Beverage",
	  "title": "Spicy HamBurger",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 32,
	  "level":"hot",
	  "url":"http://37.media.tumblr.com/51bedc9e7334de555c1b00dd3ed8cf22/tumblr_mo9e0eI0fa1riu320o1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	 {
	  "type": "Breakfast",
	  "title": "Chili con carne",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 12,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/bc0ea7c5f95701bff499f78b59d23e68/tumblr_mr74z9Lt3O1rs0z5go1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a medium sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Spicy Indomie",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 30,
	  "level":"hot",
	  "url":"http://38.media.tumblr.com/875b5eeb5b1efa37d2e9d36fbad836d3/tumblr_mzczesVrZD1rimr6yo1_1280.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Breakfast",
	  "title": "Prawn Vegs",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 25,
	  "level":"medium",
	  "url":"http://38.media.tumblr.com/23f5902bec9d2f6f600043a7fb594a6b/tumblr_n8ykd5t78n1rzwv55o1_500.png",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "skewer",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 2,
	  "duration": 20,
	  "level":"hot",
	  "url":"http://31.media.tumblr.com/tumblr_m1t5wqIm9g1qbih6so1_500.jpg",
	  "ingredients": 
		  [
		    {
		      "vegetable": "40ml"
		    }
		  ],
	  "method": 
		  [
		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "Vegetable bhaji salad",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 15,
	  "level":"hot",
	  "url":"http://s9.favim.com/orig/130818/-_-food-pancake-Favim.com-858765.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Dessert",
	  "title": "Caramel fudge",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 1,
	  "duration": 50,
	  "level":"medium",
	  "url":"http://31.media.tumblr.com/246db30925693c42cc88e2e3b4cd8f39/tumblr_n3rn31akff1qzk4ruo1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Side dish/snack",
	  "title": "Mixed veg",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 5,
	  "duration": 5,
	  "level":"sweet",
	  "url":"http://33.media.tumblr.com/29cee3f9474c8d8de183f5027bb35a06/tumblr_ms11l8E3Ml1rzwv55o1_500.png",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Beverage",
	  "title": "Spicy HamBurger",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "duration": 32,
	  "level":"hot",
	  "url":"http://37.media.tumblr.com/51bedc9e7334de555c1b00dd3ed8cf22/tumblr_mo9e0eI0fa1riu320o1_500.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a  sized stock pot, heat the oil over  heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

  ]
    };
}]);

	initialiseWithall();


	$( "li.fade" ).hover(function() {
	  	$( this ).fadeOut( 100 );
	 	$( this ).fadeIn( 500 );
	});

	$( "#mainBody" ).animate({opacity: "1"}, 600, function(){
		$( ".navBar" ).animate({bottom: "0px"}, 300);
	});

	$("#all").bind("click", function(){

		if(activeLink != "all"){
			restoreOriginalfont();
			activeLink = ($(this).text());
			  $( "#nav_indicator" ).animate({left: "0%",}, 500, function() {
			    $("#all").animate({"color":"#efbe5c","font-size":"14pt"}, 100);
			  });

		}else{
			
		}
	});

	$("#easy").bind("click", function(){

		if(activeLink != "Easy"){
			restoreOriginalfont();
			activeLink=($(this).text());
			$( "#nav_indicator" ).animate({left: "25%"}, 500, function() {
			    // Animation complete.
			    $("#easy").animate({"color":"#efbe5c","font-size":"14pt"}, 100);
			 });
		}else{

		}
	});

	$("#medium").bind("click", function(){
		if(activeLink != "Medium"){
			restoreOriginalfont();
			activeLink=($(this).text());
			$( "#nav_indicator" ).animate({left: "50%"}, 500, function() {
			    // Animation complete.
			    $("#medium").animate({"color":"#efbe5c","font-size":"14pt"}, 100);
			 });
		}else{

		}
	});

	$("#difficult").bind("click", function(){

		if(activeLink != "Difficult"){
			restoreOriginalfont();			
			activeLink=($(this).text());
			$( "#nav_indicator" ).animate({
			    left: "75%"
			  }, 500, function() {
			    // Animation complete.
			    $("#difficult").animate({"color":"#efbe5c","font-size":"14pt"}, 100);				    
			 });
		}else{

		}
	});
});

function restoreOriginalfont(){
	$("#"+activeLink.toLowerCase()).animate({"color":"#efbe5c","font-size":"13px"}, 100);
}

function initialiseWithall(){
	$('#all').find('a').trigger('click');

}

function changeTabBarIndicatorto(linkName){
	var position = $(linkName).offset().left - $('.modalContainer').offset().left;
	var linkwidth = $(linkName).width();
	position = position - 35;

    $(".forTabbar#nav_indicator").animate({
    			width: linkwidth,
			    left: position
			  }, 500);
}

function welcomeModal(){
	$('#modalBackground').animate({"opacity": "1"},400, function(){
		$('.modalContainer').animate({"opacity": "1","top": "10%"},400,function(){
				$("#closeimg").animate({
	            width: "30px",//HERE
	            height: "30px"
	        },300);
		});
	});
}

function dissmisModal(){
		$('.modalContainer').animate({"opacity": "0","top": "-70%"},400, function(){
			$('#modalBackground').animate({"opacity": "0"},400)
		});

		$("#closeimg").css({
	            width: "0px",//HERE
	            height: "0px"
	        });
}