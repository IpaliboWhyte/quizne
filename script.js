var activeLink = "";
const MAIN_HEIGHT = "20%";
const MAIN_WIDTH = "20%"
var original = $('.navBar');
var durationSelected;
var durationNormal;
var Middelbarishidden = false;
var bouncyTimer;

$( document ).ready(function() {
  var currentSection = "info";

angular.module('mealApp', ['ui.bootstrap'])
    .controller('mealController', ['$scope', 'mealFactory', function ($scope, mealFactory) {
    $scope.recipes = mealFactory.recipes;
    $scope.selectedMeals = [];
    $scope.text = '';
    $scope.openMenu = false;

	$scope.filteredReciepes = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 16
  ,$scope.maxSize = 100;
  
  $scope.numPages = function () {
    return Math.ceil($scope.recipes.length / $scope.numPerPage);
  };
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredReciepes = $scope.recipes.slice(begin, end);
  });

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

	$scope.UserUITypes = 
	[
  // *******Left Input 1 ********
		{
      "facetPos":"leftBar",
			"title": [
				{
					"name":"Type",
					"size":"20",
					"color":"#BDC3C7"
				}
			],
			"input": [
				{
					"name":"musicType",
					"type":"select",
					"value":"album",
					"colorStyle":"#BFBFBF",
					"bodyStyle":"border:0; width:80%; height:30px; background:none; background-color:#22313F;",
					"inputMargin":"50",
					"options":[
						{
							"inputMargin": "10",
							"optionValue": "Album"
						},
						{
							"inputMargin": "10",
							"optionValue": "Podcast"
						},
						{
							"inputMargin": "10",
							"optionValue": "Single",
						}
					]
				}
			]
		},
  // *******Left Input 2 ********
		{
      "facetPos":"leftBar",
			"title": [
				{
					"name":"Duration",
					"size":"20",
					"color":"#BDC3C7"
				}
			],
			"input": [
				{
					"name":"musicDuration",
					"type":"slider",
          "value":"slide",
          "min": 5,
          "max": 100,
					"colorStyle":"#22313F",
					"bodyStyle":"text-align:center;",
          "height":"20px;",
          "width":"70%;"
				}
			]
		},
  // *******Left Input 3 ********
    {
      "facetPos":"leftBar",
      "title": [
        {
          "name":"Genre",
          "size":"20",
          "color":"#BDC3C7"
        }
      ],
      "input": [
        {
          "name":"genre",
          "type":"radio",
          "value":"genre",
          "min": 5,
          "max": 100,
          "colorStyle":"#BFBFBF",
          "bodyStyle":"border:0; width:80%; height:30px; background:none; background-color:#22313F;",
          "options":[
            {
              "inputMargin": "10",
              "optionValue": "hip-hop"
            },
            {
              "inputMargin": "10",
              "optionValue": "pop"
            },
            {
              "inputMargin": "10",
              "optionValue": "soul",
            }
          ]
        }
      ]
    },
  // *******Top Input 1 ********
    {
      "facetPos":"topBar",
      "title": [
        {
          "name":"Genre",
          "size":"20",
          "color":"#BDC3C7"
        }
      ],
      "input": [
        {
          "name":"musicGenre",
          "type":"radio",
          "value":"genre",
          "min": "",
          "max": "",
          "colorStyle":"#BFBFBF",
          "bodyStyle":"border:0; width:80%; height:30px; background:none; background-color:#22313F;",
          "inputStyle":"color:none; margin:3px; background-color:#ECF0F1; display: inline-block; padding:3px; border-radius:5px; font-size:12px;",
          "options":[
            {
              "inputMargin": "10",
              "optionValue": "hip-hop"
            },
            {
              "inputMargin": "10",
              "optionValue": "pop"
            },
            {
              "inputMargin": "10",
              "optionValue": "soul"
            }
          ]
        }
      ]
    },
  // *******Middle Input 1 ********
    {
      "facetPos":"middleBar",
      "title": [
        {
          "name":"Genre",
          "size":"20",
          "color":"#BDC3C7"
        }
      ],
      "input": [
        {
          "name":"musicGenre",
          "type":"select",
          "value":"genre",
          "min": "",
          "max": "",
          "colorStyle":"#BFBFBF",
          "bodyStyle":"border:0; width:150px; height:30px; background:none; background-color:#22313F;",
          "inputStyle":"color:none; margin:3px; background-color:#ECF0F1; display: inline-block; padding:3px; border-radius:5px; font-size:12px;",
          "options":[
            {
              "inputMargin": "10",
              "optionValue": "hip-hop"
            },
            {
              "inputMargin": "10",
              "optionValue": "pop"
            },
            {
              "inputMargin": "10",
              "optionValue": "soul"
            }
          ]
        }
      ]
    },
  // *******Middle Input 2 ********
    {
      "facetPos":"middleBar",
      "title": [
        {
          "name":"Genre",
          "size":"20",
          "color":"#BDC3C7"
        }
      ],
      "input": [
        {
          "name":"musicGenre",
          "type":"radio",
          "value":"genre",
          "min": "",
          "max": "",
          "colorStyle":"#BFBFBF",
          "bodyStyle":"border:0; width:150px; height:30px; background:none; background-color:#22313F;",
          "inputStyle":"color:none; margin:3px; background-color:#ECF0F1; display: inline-block; padding:3px; border-radius:5px; font-size:12px;",
          "options":[
            {
              "inputMargin": "10",
              "optionValue": "world"
            },
            {
              "inputMargin": "10",
              "optionValue": "classic"
            },
            {
              "inputMargin": "10",
              "optionValue": "noclassic"
            }
          ]
        }
      ]
    },
  // *******Middle Input 3 ********
    {
      "facetPos":"middleBar",
      "title": [
        {
          "name":"Type",
          "size":"20",
          "color":"#BDC3C7"
        }
      ],
      "input": [
        {
          "name":"musicGenre",
          "type":"checkbox",
          "value":"genre",
          "min": "",
          "max": "",
          "colorStyle":"#BFBFBF",
          "bodyStyle":"border:0; width:150px; height:30px; background:none; background-color:#22313F;",
          "inputStyle":"color:none; margin:3px; background-color:#ECF0F1; display: inline-block; padding:3px; border-radius:5px; font-size:12px;",
          "options":[
            {
              "inputMargin": "10",
              "optionValue": "world"
            },
            {
              "inputMargin": "10",
              "optionValue": "classic"
            },
            {
              "inputMargin": "10",
              "optionValue": "noclassic"
            }
          ]
        }
      ]
    },
  // *******Middle Input 4 ********
    {
      "facetPos":"middleBar",
      "title": [
        {
          "name":"Duration",
          "size":"20",
          "color":"#BDC3C7"
        }
      ],
      "input": [
        {
          "name":"musicGenre",
          "type":"slider",
          "value":"genre",
          "min": 0,
          "max": 50,
          "colorStyle":"#BFBFBF",
          "bodyStyle":"border:0; width:150px; height:30px; background:none; background-color:#22313F;",
          "inputStyle":"color:none; margin:3px; background-color:#ECF0F1; display: inline-block; padding:3px; border-radius:5px; font-size:12px;",
          "options":[
            {
              "inputMargin": "10",
              "optionValue": "world"
            },
            {
              "inputMargin": "10",
              "optionValue": "classic"
            },
            {
              "inputMargin": "10",
              "optionValue": "noclassic"
            }
          ]
        }
      ]
    }
	]

	$scope.Usersettings = ["radio","text"];

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
}]).factory('mealFactory', [function () 
{
  return {recipes:[
  {
    "type": "Album",
    "title": "Justin Bieber-Recovery",
    "description": "Recovery is a song recorded by Canadian recording artist Justin Bieber for his second compilation album, Journals (2013). The song was released on October 28, 2013, as a digital download.[1] The song is the fourth in Bieber's series Music Mondays, the first three being Heartbreaker (October 7), All That Matters",
    "Charts": [
      {
        "country":"Austria (Ö3 Austria Top 40)",
        "position":49
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":23
      },
      {
        "country":"Belgium (Ultratop Flanders Urban)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Wallonia)",
        "position":29
      },
      {
        "country":"UK R&B (Official Charts Company)",
        "position":4
      },
      {
        "country":"US Billboard Hot 100",
        "position":4        
      }

    ],
    "ratings": 3,
    "duration": 5,
    "Genre":"hip-hop",
    "url":"http://images.rapgenius.com/d6agq6kk70omcwtr43lsylct7.500x500x1.jpg"
  },
  {
    "type": "Album",
    "title": "Kid ink-Crazy",
    "description": "Brian Todd Collins (born April 1, 1986 in Los Angeles, California), best known by his stage name Kid Ink, is an American rapper from Los Angeles, signed to RCA Records",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 8,
    "Genre":"pop",
    "url":"http://kidinkmusic.com/files/album1/thumbs/bg15.jpg"
  },  
  {
    "type": "Single",
    "title": "Marilyn- purple matter",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 4,
    "duration": 3,
    "Genre":"soul",
    "url":"http://th04.deviantart.net/fs49/PRE/f/2009/215/7/f/Music_For_The_Soul_by_CandidoNeto.jpg"
  },
  {
    "type": "Single",
    "title": "Bob Marley- No love",
    "description": "Robert Nesta Bob Marley OM (6 February 1945 – 11 May 1981) was a Jamaican reggae singer-songwriter, musician, and guitarist who achieved international fame and acclaim",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 4,
    "Genre":"reggae",
    "url":"http://2.bp.blogspot.com/_ivWX1b9wiEw/TBpEkGkdE8I/AAAAAAAAA6A/y5F5bRj57OU/s1600/bob-marley.jpg"
  },
  {
    "type": "Album",
    "title": "Inna - Hot",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 3,
    "duration": 60,
    "Genre":"electro",
    "url":"http://musicofelectro.files.wordpress.com/2011/07/electro_music_is_life_by_meuhmeuhh.png"
  },
  {
    "type": "Podcast",
    "title": "Dj Bl3nd - Sexy mix",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 20,
    "Genre":"electro",
    "url":"https://i.ytimg.com/vi/FDGuMFt2MF0/maxresdefault.jpg"
  },
  {
    "type": "single",
    "title": "Azealia banks - 212",
    "description": "212 is the debut single by American rapper Azealia Banks. The song samples the track Float My Boat by Lazy Jay, who is credited on the track",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 20,
    "Genre":"crunck",
    "url":"http://www.brookenipar.com/content/02-music/19-azealia-banks-2/01-azealia-banks.jpg"
  },
  {
    "type": "single",
    "title": "Iggy azelia - Fancy",
    "description": "Fancy is a song by Australian recording artist Iggy Azalea from her debut studio album, The New Classic (2014). It features English singer-songwriter Charli XCX, and was released on February 17, 2014 by Island Records as the fourth single from the album.[2]",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 1,
    "duration": 20,
    "Genre":"trap",
    "url":"http://www.nois3.com/wp-content/uploads/2014/02/iggy-azelia-2.jpg?28b83a"
  },
  {
    "type": "single",
    "title": "Eminem - Not Afraid",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 6,
    "Genre":"hip-hop",
    "url":"http://1.bp.blogspot.com/-XRvCB3igeQs/TVvqOEI-T2I/AAAAAAAAAF4/UwPoZTyyiSQ/s1600/eminem+not+afraid+recovery.JPG"
  },
  {
    "type": "single",
    "title": "Beyonce - Blu'ivy",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 4,
    "duration": 6,
    "Genre":"hip-hop",
    "url":"http://kempiredaily.com/wp-content/uploads/2014/01/kempire/beyonce-blue-nye.jpg"
  },

  {
    "type": "Album",
    "title": "Disclosure- Lonley",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 6,
    "Genre":"house",
    "url":"http://www.mixmag.net/sites/default/files/imagecache/article/images/disclosurefeature3_0.jpg"
  },

  {
    "type": "single",
    "title": "professor Green- Jungle",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 2,
    "duration": 6,
    "Genre":"Grime",
    "url":"http://bossmusicent.files.wordpress.com/2010/10/progreen-side.jpg"
  },

  {
    "type": "single",
    "title": "Runtown- Domot",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }
    ],
    "ratings": 5,
    "duration": 2,
    "Genre":"afrobeats",
    "url":"http://www.360nobs.com/wp-content/uploads/2014/03/run1.jpg"
  },
    {
    "type": "Album",
    "title": "Justin Bieber-Recovery",
    "description": "Recovery is a song recorded by Canadian recording artist Justin Bieber for his second compilation album, Journals (2013). The song was released on October 28, 2013, as a digital download.[1] The song is the fourth in Bieber's series Music Mondays, the first three being Heartbreaker (October 7), All That Matters",
    "Charts": [
      {
        "country":"Austria (Ö3 Austria Top 40)",
        "position":49
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":23
      },
      {
        "country":"Belgium (Ultratop Flanders Urban)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Wallonia)",
        "position":29
      },
      {
        "country":"UK R&B (Official Charts Company)",
        "position":4
      },
      {
        "country":"US Billboard Hot 100",
        "position":4        
      }

    ],
    "ratings": 3,
    "duration": 5,
    "Genre":"hip-hop",
    "url":"http://images.rapgenius.com/d6agq6kk70omcwtr43lsylct7.500x500x1.jpg"
  },

  {
    "type": "Album",
    "title": "Kid ink-Crazy",
    "description": "Brian Todd Collins (born April 1, 1986 in Los Angeles, California), best known by his stage name Kid Ink, is an American rapper from Los Angeles, signed to RCA Records",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 8,
    "Genre":"pop",
    "url":"http://kidinkmusic.com/files/album1/thumbs/bg15.jpg"
  },  
  {
    "type": "Single",
    "title": "Marilyn- purple matter",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 4,
    "duration": 3,
    "Genre":"soul",
    "url":"http://th04.deviantart.net/fs49/PRE/f/2009/215/7/f/Music_For_The_Soul_by_CandidoNeto.jpg"
  },
  {
    "type": "Single",
    "title": "Bob Marley- No love",
    "description": "Robert Nesta Bob Marley OM (6 February 1945 – 11 May 1981) was a Jamaican reggae singer-songwriter, musician, and guitarist who achieved international fame and acclaim",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 4,
    "Genre":"reggae",
    "url":"http://2.bp.blogspot.com/_ivWX1b9wiEw/TBpEkGkdE8I/AAAAAAAAA6A/y5F5bRj57OU/s1600/bob-marley.jpg"
  },
  {
    "type": "Album",
    "title": "Inna - Hot",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 3,
    "duration": 60,
    "Genre":"electro",
    "url":"http://musicofelectro.files.wordpress.com/2011/07/electro_music_is_life_by_meuhmeuhh.png"
  },
  {
    "type": "Podcast",
    "title": "Dj Bl3nd - Sexy mix",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 20,
    "Genre":"electro",
    "url":"https://i.ytimg.com/vi/FDGuMFt2MF0/maxresdefault.jpg"
  },
  {
    "type": "single",
    "title": "Azealia banks - 212",
    "description": "212 is the debut single by American rapper Azealia Banks. The song samples the track Float My Boat by Lazy Jay, who is credited on the track",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 20,
    "Genre":"crunck",
    "url":"http://www.brookenipar.com/content/02-music/19-azealia-banks-2/01-azealia-banks.jpg"
  },
  {
    "type": "single",
    "title": "Iggy azelia - Fancy",
    "description": "Fancy is a song by Australian recording artist Iggy Azalea from her debut studio album, The New Classic (2014). It features English singer-songwriter Charli XCX, and was released on February 17, 2014 by Island Records as the fourth single from the album.[2]",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 1,
    "duration": 20,
    "Genre":"trap",
    "url":"http://www.nois3.com/wp-content/uploads/2014/02/iggy-azelia-2.jpg?28b83a"
  },
  {
    "type": "single",
    "title": "Eminem - Not Afraid",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 6,
    "Genre":"hip-hop",
    "url":"http://1.bp.blogspot.com/-XRvCB3igeQs/TVvqOEI-T2I/AAAAAAAAAF4/UwPoZTyyiSQ/s1600/eminem+not+afraid+recovery.JPG"
  },
  {
    "type": "single",
    "title": "Beyonce - Blu'ivy",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 4,
    "duration": 6,
    "Genre":"hip-hop",
    "url":"http://kempiredaily.com/wp-content/uploads/2014/01/kempire/beyonce-blue-nye.jpg"
  },
  {
    "type": "Album",
    "title": "Disclosure- Lonley",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 6,
    "Genre":"house",
    "url":"http://www.mixmag.net/sites/default/files/imagecache/article/images/disclosurefeature3_0.jpg"
  },

  {
    "type": "single",
    "title": "professor Green- Jungle",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 2,
    "duration": 6,
    "Genre":"Grime",
    "url":"http://bossmusicent.files.wordpress.com/2010/10/progreen-side.jpg"
  },

  {
    "type": "single",
    "title": "Runtown- Domot",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }
    ],
    "ratings": 5,
    "duration": 2,
    "Genre":"afrobeats",
    "url":"http://www.360nobs.com/wp-content/uploads/2014/03/run1.jpg"
  },  

  {
    "type": "Album",
    "title": "Justin Bieber-Recovery",
    "description": "Recovery is a song recorded by Canadian recording artist Justin Bieber for his second compilation album, Journals (2013). The song was released on October 28, 2013, as a digital download.[1] The song is the fourth in Bieber's series Music Mondays, the first three being Heartbreaker (October 7), All That Matters",
    "Charts": [
      {
        "country":"Austria (Ö3 Austria Top 40)",
        "position":49
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":23
      },
      {
        "country":"Belgium (Ultratop Flanders Urban)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Wallonia)",
        "position":29
      },
      {
        "country":"UK R&B (Official Charts Company)",
        "position":4
      },
      {
        "country":"US Billboard Hot 100",
        "position":4        
      }

    ],
    "ratings": 3,
    "duration": 5,
    "Genre":"hip-hop",
    "url":"http://images.rapgenius.com/d6agq6kk70omcwtr43lsylct7.500x500x1.jpg"
  },

  {
    "type": "Album",
    "title": "Kid ink-Crazy",
    "description": "Brian Todd Collins (born April 1, 1986 in Los Angeles, California), best known by his stage name Kid Ink, is an American rapper from Los Angeles, signed to RCA Records",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 8,
    "Genre":"pop",
    "url":"http://kidinkmusic.com/files/album1/thumbs/bg15.jpg"
  },  
  {
    "type": "Single",
    "title": "Marilyn- purple matter",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 4,
    "duration": 3,
    "Genre":"soul",
    "url":"http://th04.deviantart.net/fs49/PRE/f/2009/215/7/f/Music_For_The_Soul_by_CandidoNeto.jpg"
  },
  {
    "type": "Single",
    "title": "Bob Marley- No love",
    "description": "Robert Nesta Bob Marley OM (6 February 1945 – 11 May 1981) was a Jamaican reggae singer-songwriter, musician, and guitarist who achieved international fame and acclaim",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 4,
    "Genre":"reggae",
    "url":"http://2.bp.blogspot.com/_ivWX1b9wiEw/TBpEkGkdE8I/AAAAAAAAA6A/y5F5bRj57OU/s1600/bob-marley.jpg"
  },
  {
    "type": "Album",
    "title": "Inna - Hot",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 3,
    "duration": 60,
    "Genre":"electro",
    "url":"http://musicofelectro.files.wordpress.com/2011/07/electro_music_is_life_by_meuhmeuhh.png"
  },
  {
    "type": "Podcast",
    "title": "Dj Bl3nd - Sexy mix",
    "description": "Hot is a song by Romanian recording artist Inna from her debut studio album, of the same name. It was released on November 12, 2008 by Roton Records as the lead single from the album.",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 20,
    "Genre":"electro",
    "url":"https://i.ytimg.com/vi/FDGuMFt2MF0/maxresdefault.jpg"
  },
  {
    "type": "single",
    "title": "Azealia banks - 212",
    "description": "212 is the debut single by American rapper Azealia Banks. The song samples the track Float My Boat by Lazy Jay, who is credited on the track",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 20,
    "Genre":"crunck",
    "url":"http://www.brookenipar.com/content/02-music/19-azealia-banks-2/01-azealia-banks.jpg"
  },
  {
    "type": "single",
    "title": "Iggy azelia - Fancy",
    "description": "Fancy is a song by Australian recording artist Iggy Azalea from her debut studio album, The New Classic (2014). It features English singer-songwriter Charli XCX, and was released on February 17, 2014 by Island Records as the fourth single from the album.[2]",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 1,
    "duration": 20,
    "Genre":"trap",
    "url":"http://www.nois3.com/wp-content/uploads/2014/02/iggy-azelia-2.jpg?28b83a"
  },
  {
    "type": "single",
    "title": "Eminem - Not Afraid",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 6,
    "Genre":"hip-hop",
    "url":"http://1.bp.blogspot.com/-XRvCB3igeQs/TVvqOEI-T2I/AAAAAAAAAF4/UwPoZTyyiSQ/s1600/eminem+not+afraid+recovery.JPG"
  },
  {
    "type": "single",
    "title": "Beyonce - Blu'ivy",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 4,
    "duration": 6,
    "Genre":"hip-hop",
    "url":"http://kempiredaily.com/wp-content/uploads/2014/01/kempire/beyonce-blue-nye.jpg"
  },

  {
    "type": "Album",
    "title": "Disclosure- Lonley",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 5,
    "duration": 6,
    "Genre":"house",
    "url":"http://www.mixmag.net/sites/default/files/imagecache/article/images/disclosurefeature3_0.jpg"
  },

  {
    "type": "single",
    "title": "professor Green- Jungle",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }

    ],
    "ratings": 2,
    "duration": 6,
    "Genre":"Grime",
    "url":"http://bossmusicent.files.wordpress.com/2010/10/progreen-side.jpg"
  },

  {
    "type": "single",
    "title": "Runtown- Domot",
    "description": "",
    "Charts": [
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Belgium (Ultratop 50 Flanders)",
        "position":6
      },
      {
        "country":"Canada (Canadian Hot 100)",
        "position":97
      },
      {
        "country":"Denmark (Tracklisten)",
        "position":13
      },
      {
        "country":"UK Dance (Official Charts Company)",
        "position":1
      },
      {
        "country":"US Billboard Hot 100",
        "position":80       
      }
    ],
    "ratings": 5,
    "duration": 2,
    "Genre":"afrobeats",
    "url":"http://www.360nobs.com/wp-content/uploads/2014/03/run1.jpg"
  } 
  ]
}

}]).filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  	};
	});

	initialiseWithall();

	$( "li.fade" ).hover(function() {
	  	$( this ).fadeOut( 100 );
	 	 $( this ).fadeIn( 500 );
	});

	$( "#mainBody" ).animate({opacity: "1"}, 600, function(){

			$( ".navBar" ).animate({bottom: "0px"}, 600);
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

	$("#slide").bind("click", function(){
		$("#slide").css({"background-color":"#2C3E50"});
		$("#byValue").css({"background-color":"#22313F"});
	});

	$("#byValue").bind("click", function(){
		$("#byValue").css({"background-color":"#2C3E50"});
		$("#slide").css({"background-color":"#22313F"});
	});

  $("input#hideMiddleBar").bind("click", function(){

    if (!Middelbarishidden) {

      $( ".navBar" ).animate({bottom: "-46%"}, 600,function(){

        $("input#hideMiddleBar").attr("src", "show.png");

        bouncyTimer = setInterval(bounceIcon, 2000);

      });

    }else{

      $( ".navBar" ).animate({bottom: "0"}, 600,function(){

        $("input#hideMiddleBar").attr("src", "hide.png");
        clearInterval(bouncyTimer);

      });
    }
    Middelbarishidden =!Middelbarishidden;
  });

  // Prevent automatic scroll
  $(".mainContainer").scroll(function (event) {
    var p = $( ".navBar" );
    var position = p.offset().top;
    console.log(position);
    if (position < 0 && Middelbarishidden) {
      clearInterval(bouncyTimer);
    }else if (position > 0 && Middelbarishidden){
      clearInterval(bouncyTimer);
      bouncyTimer = setInterval(bounceIcon, 2000);
    }
  });

});

function bounceIcon(){
  $("input#hideMiddleBar").effect( "bounce", {times:3}, "slow" );
}

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
		$('.modalContainer').animate({"top": "10%"},400,function(){
				$("#closeimg").animate({
	            width: "30px",//HERE
	            height: "30px"
	        },300);
		});
	});
}

function dissmisModal(){
		$('.modalContainer').animate({"top": "-70%"},400, function(){
			$('#modalBackground').animate({"opacity": "0"},400)
		});

		$("#closeimg").css({
	            width: "0px",//HERE
	            height: "0px"
	        });
}