
$(function(){
	// nav 하얀색으로
	var chk = $("html").find(".sub_visual").length,
		chk2 = $("html").find(".sub_content").length;
	if( chk2 > 0){
		$(".nav").addClass("white");
	}
	
})
$(window).load(function(){
	$('.nav .menu').on('click', function () {
		var H = $(window).height();
		if ($('body').hasClass('open_gnb')) {
	    	$('body').removeClass('complete');
			setTimeout(function(){
				$('body').removeClass('open_gnb');
			},500)
		} else {
			framescroll();
			ham();
		    $('body').addClass('open_gnb');
		    setTimeout(function(){
		    	$('body').addClass('complete');
		    },200)
		}
	});
	$('.sub_visual .drop button').on('click', function () {
	  if ($(this).parent().hasClass('open')) {
	    $(this).parent().removeClass('open');
	  } else {
	    $(this).parent().addClass('open');
	  }
	});
	
	// 드롭다운
	$(".drop").each(function(){
		var title = $(".txt_fild h2").eq(0).text();
		$(this).find("button").text(title);
	})
	
	//탑버튼
	$(".footer .links .top").click(function(){
		$("html,body").animate({
			scrollTop:0
		},500)
	})
	
	// rnd 메뉴 액티브
	$(".nav .mid li").each(function(){
		var tit = $(".sub_visual .txt_fild span").text(),
			a = $(this).find("a > span:eq(0)").text(),
			$this = $(this);
		if(tit == a){
			$this.addClass("on");
		}
	})
	
	// 다국어 드롭다운
	$(".lang.mo_view").click(function(){
		var $this = $(this),
			chk = $(this).hasClass("on");
		if(chk){
			$this.removeClass("on");
		}else{
			$this.addClass("on");
		}
	})
	
});
$(window).load(function(){
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false,
		mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
	if(!isMobile && !mac){
		
		$("html").not(".mains").not(".prod").niceScroll({
			horizrailenabled:false,
//			scrollspeed: 100,
//			mousescrollstep:30,
		});
		
		$("html.prod").niceScroll({
    		horizrailenabled:false,
    		scrollspeed: 70,
    		mousescrollstep:70,
    	});
		
		$(window).resize(function(){
			$("html").getNiceScroll().resize();
		});
	}

	
	
//	topchk();
})
//$(window).load(function(){
//	$(".scroll").scroll(function(){
//		topchk();
//	});		
//
//});
function ham(){
	var winW = $(window).width();	
	if(winW < 1421 ){	
		$(".gnb > ul > li").removeClass("on");
		$(".gnb > ul > li").on("click", function(){
			$(".gnb > ul > li").removeClass("on");
			$(this).addClass("on");
		})
	}
}

function topchk(){
	var top = $(".scroll").scrollTop();
	if(top > 110){
		$("html").addClass("prod-scr");
	}else{
		$("html").removeClass("prod-scr");
	}
}

// nav 푸터로가면 올라가게
$(window).load(function(){
	nav();
	frame();
	$(window).scroll(function(){
		nav();
	})		

});
function nav(){
	var winTop = $(window).scrollTop(),
		htmlH = $("html").height()-$(window).height()-$(".footer").height(),
		winW = $(window).width();	
	
	if(winTop > htmlH && winW > 1024){
		$(".nav").css("margin-top","-"+(winTop-htmlH)+"px");
	}else{
		$(".nav").css("margin-top","0px");
		
	}	
	
	// 모바일 헤더 배경
	if(winTop > 50){
		$("#header").addClass("fixed");		
	}else{
		$("#header").removeClass("fixed");
	}
};

// 메뉴 안에 컨텐츠
function frame(){
	var path = location.href;
	$("html").not(".iframe-html").find("#html-frame").attr("src",path+"/");
	$("#html-frame").on("load", function() {
		$(this).contents().find("html").addClass("iframe-html");
		$(this).contents().find(".gnb-html").remove();
	});
	

}
function framescroll(){
	var winTop = $(window).scrollTop();
		$("#html-frame").contents().find("html").animate({
			scrollTop:winTop
		},0);
}

$(window).load(function(){
	// contact 첨부파일 안내
	$('.write_set .files .file_in_bx img').click(function(){
		$('.write_set .files .file_info').toggleClass('on');
	});	
})


$(window).load(function(){
	// 크기변하면 리로드
	var Dwid = $(window).width();
	$(window).resize(function(){
		var Nwid = $(window).width();
		if(Dwid !== Nwid){
			location.reload();			
		}
	});	
});