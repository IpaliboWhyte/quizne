var activeLink = "All";

$( document ).ready(function() {

	$( "#mainBody" ).animate({opacity: "1"}, 500, function(){
		$( ".main" ).animate({left: "240px"}, 800, function(){

			$( ".navBar" ).animate({bottom: "0px"}, 500);
		});
	});

	$("#all").bind("click", function(){

		if(activeLink != "All"){
			activeLink = ($(this).text());
			  $( "#nav_indicator" ).animate({
			    left: "0%"
			  }, 700, function() {
			    // Animation complete.
			  });

		}else{
			
		}
	});

	$("#easy").bind("click", function(){

		if(activeLink != "Easy"){
			activeLink=($(this).text());
			$( "#nav_indicator" ).animate({
			    left: "25%"
			  }, 700, function() {
			    // Animation complete.
			 });
		}else{

		}
	});

	$("#medium").bind("click", function(){

		if(activeLink != "Medium"){
				activeLink=($(this).text());
				$( "#nav_indicator" ).animate({
				    left: "50%"
				  }, 700, function() {
				    // Animation complete.
				 });
			}else{

			}
	});


	$("#difficult").bind("click", function(){

		if(activeLink != "Difficult"){
				activeLink=($(this).text());
				$( "#nav_indicator" ).animate({
				    left: "75%"
				  }, 700, function() {
				    // Animation complete.
				 });
			}else{

			}
	});
});