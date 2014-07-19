var activeLink = "";
const MAIN_HEIGHT = "20%";
const MAIN_WIDTH = "20%"

$( document ).ready(function() {
var phonecatApp = angular.module('phonecatApp', []);

angular.module('mealApp', [])
    .controller('mealController', ['$scope', 'mealFactory', function ($scope, mealFactory) {
    $scope.recipes = mealFactory.recipes;
    $scope.selectedMeals = [];
}])
    .factory('mealFactory', [function () {
    return {
        recipes:[
    {
	  "type": "Breakfast",
	  "title": "Chili con carne",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
		      "1": "In a medium sized stock pot, heat the oil over medium heat. Saute onions, chile peppers andgarlic until soft."
		    }
		  ]
	},

	{
	  "type": "Main Meal",
	  "title": "chipotle",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
		      "1": "In a medium sized stock pot, heat the oil over medium heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Dessert",
	  "title": "Caramel fudge",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
		      "1": "In a medium sized stock pot, heat the oil over medium heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Side dish/snack",
	  "title": "Mixed veg",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
		      "1": "In a medium sized stock pot, heat the oil over medium heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	},

	{
	  "type": "Beverage",
	  "title": "Spicy HamBurger",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
	  "level":"hot",
	  "url":"http://static.tumblr.com/ae7259a26267c3af3ec4adb39ced6df2/jewuasv/3Z5mlts72/tumblr_static_cute-food-hamburger-photography-yeah-favim.com-438758.jpg",
	  "ingredients": 
	  	[
		    {
		      "vegetable": "40ml"
		    }
	  	],
	  "method": 
	  	[

		    {
		      "1": "In a medium sized stock pot, heat the oil over medium heat. Saute onions, chile peppers andgarlic until soft."
		    }
	  	]
	}

  ]
    };
}]);


	initialiseWithall();

	$( "li.fade" ).hover(function() {
	  	$( this ).fadeOut( 100 );
	 	$( this ).fadeIn( 500 );
	});

	$( "#mainBody" ).animate({opacity: "1"}, 600, function(){
		$( ".navBar" ).animate({bottom: "10px"}, 300, function(){
			$( ".navBar" ).animate({bottom: "0px"}, 200);
		});
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


