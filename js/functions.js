	var flag = false;

	function spawnBall(i){
		var HeighScreen = $(document).height(); // returns height of HTML document
		var WidthScreen = $(document).width(); // returns width of HTML document;
                var ballType;
		switch(i){
			case 0:
                ballType = "tennisball";
				break;
			case 1:
				ballType = "bowlingball";
				break;
			case 2:
                ballType = "football";
				break;
			case 3:
                ballType = "soccerball";
				break;
			case 4:
			default:
                ballType = "tennisball";
				break;

		}
                $("body").append("<img class=\"ball "+ ballType +"\" src=\"./img/"+ballType+".png\" alt=\"\" style=\"left:" + ((Math.random() * WidthScreen ) + 1) +"px\"/>").children().last().each(function(){
                    $(".ball").animate({top: 1000, left: "-=10px"}, 2000, 'easeInQuint', function(){
                    	$(this).remove();
                    });
                });
	}

	  $( document ).ready(function() {
              spawnBall(Math.floor((Math.random() * 4) + 1));
		setInterval(function(){
			spawnBall(Math.floor((Math.random() * 4) + 1));
		}, 3500);

	  });


	$( "html" ).mousedown(function(e) {
            
            var coordX = e.pageX;
            var footerPosition = $( "footer" ).position();
            
            $("body").append("<img class=\"fist\" src=\"./img/longfist.png\" alt=\"\"/>").children().last().each(function(){
                
                $(".fist").last().offset({top: footerPosition.top+160, left: coordX-75});
                $( ".fist" ).last().animate({ "top": footerPosition.top }, "normal", function(){
                        $(this).animate({ "top": footerPosition.top+160 }, "normal", function(){
                               $(this).remove();
                        });
                } );
            });

            
	});

