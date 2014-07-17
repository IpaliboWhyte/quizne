var activeLink = "";
const MAIN_HEIGHT = "20%";
const MAIN_WIDTH = "20%"

$( document ).ready(function() {
var phonecatApp = angular.module('phonecatApp', []);

	phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.reciepes = 
  [
    {
	  "type": "Breakfast",
	  "title": "Chili con carne",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
	  "title": "Main Meal",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
	  "title": "dessert",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
	  "title": "",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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
	  "title": "Main Meal",
	  "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
	  "ratings": 4,
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

  ];
});

	initialiseWithall();

	$( "#mainBody" ).animate({opacity: "1"}, 600, function(){
		$( ".navBar" ).animate({bottom: "10px"}, 300, function(){
			$( ".navBar" ).animate({bottom: "-1px"}, 200);
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


