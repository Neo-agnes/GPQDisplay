(function($) { 

	$(window).load(function(){
		img_event_remove();
		img_event();
		$(window).scroll(function(e){
			var s = $(window).scrollTop();	// 현재 window scrollTop
			if(s>50){
				img_event();
				graph();
			}
		})
		function img_event(){
			$(".img-ani").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				if(w_t > i_t + 200){
					$(this).addClass("img-aniload");
				}
				if($(".img-ani").hasClass("img-aniload")){					
					ani();
									
				}
			})
		}

		function ani(){
	    	$(".body-status .year").each(function(){
	    		var txt = $(".year li");
	    		txt.addClass("width-ani");   		
	    	});
	    	
	    }
		function graph(){
			$(".graph").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				if(w_t > i_t + 200){				
					$(this).addClass("active");
					line();
				}
				
			})
		}
		function line(){
			$(".graph1 .graph_inner > div").each(function(){				
				var delay = $(this).index();
				$(this).find("span").addClass("dlay").css("transition-delay", delay* 0.1 + "s");
				$(this).addClass("opa").css("transition-delay", delay* 0.1 + "s");
			});	
		};
		
		

		/******************************************
		* 이미지 effect remove event
		* img_event() 가 적용되었던 요소들을 초기화 시켜주겠습니다.
		******************************************/
		function img_event_remove(){
			$(".img-ani").removeClass("img-aniload");
		}
	})
	
} ) ( jQuery);


