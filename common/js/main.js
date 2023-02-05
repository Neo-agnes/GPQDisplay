$(function(){
	$("html").addClass("mains");
	H();
	
});
$(window).load(function(){
	$("html,body").animate({
		scrollTop:0
	},function(){
		var clone = $(".main_section04 .pc_view .mySwiper2").clone();
		$(".main_section04 .mo_view").html(clone);
		midslide();
		$("html").addClass("ready");
		
		var subjectText = [];
		for(i = 0;i<$('.step01 h2 strong').text().length; i++){
	 		subjectText.push($('.step01 h2 strong').text().substr(i,1));
	 		
	 	}
	    $('.step01 h2 strong').text('');
	    for(a = 0; a < subjectText.length; a++){
	 	   $('.step01 h2 strong').append('<span style="transition-delay:' + (a * 0.1 ).toFixed(1) + 's">' + subjectText[a] + '</span>');
	    }
	    setTimeout(function(){
	    	$('.main_section01 .text_in').addClass('on');
	    },200)
	})
});
$(window).resize(function(){
	H();
	midslide();	
});


$(window).load(function(){
	mainAni();
	
	skrollr.init({ 
		forceHeight: false, 
		mobileCheck: function(){ 
			if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){ 
				
			}
		},
	});
});


$(window).load(function(){
	$(".main_section").stop().on("touchmove mousewheel wheel",function(){
		console.log("z")
		var chk = $(".main_section01").attr("data-stop");
		if(chk == "0"){
			$(".main_section01").attr("data-stop","1");
			$('.main_section01').addClass('act');
			setTimeout(function(){
				 stepani()
			},500)
		}
	})
	$('.step01-btn').on('click', function () {
		$('.main_section01').addClass('act');
		 stepani();
	});
	function stepani(){
		$('.mains').addClass('scroll');
		setTimeout(function(){
			$('.main_section01').addClass('end');
		},1000);
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false,
			mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
		if(!isMobile && !mac){
			$("html").niceScroll({
				horizrailenabled:false,
				scrollspeed: 70,
				mousescrollstep:70,
			});
		}
		
	}
	
	$('.main_section04 .pc_view li').on('mouseenter', function () {
		var index = $(this).index();
		if (!$($(this)).hasClass('hover')) {
			$('.main_section04 .pc_view li.hover').removeClass('hover');
			$('.main_section04 .imgs .on').removeClass('on');
			$('.main_section04 .imgs > div').eq(index).addClass('on');
			$($(this)).addClass('hover');
		}
	});
	$('.main_section04 .pc_view ul').on('mouseleave', function () {
		$('.main_section04 .pc_view li.hover').removeClass('hover');
			$('.main_section04 .imgs .on').removeClass('on');
	});

});



var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
//	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	loop:true,
	coverflowEffect: {
		rotate: 70,
		stretch: 100,
		depth: 320,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".main_section03 .swiper-pagination",
	},
	navigation: {
		nextEl: ".slide .next",
		prevEl: ".slide .prev",
	},
});


swiper.slideTo(1, 0, '');

swiper.on('slideChange', function () {
	var real = swiper.realIndex;
	$('.main_section03 .slide').removeClass('slide01 slide02 slide03');
	$('.main_section03 ul.text').removeClass('act01 act02 act03');
	$('.main_section03 ul.text').addClass('act0'+(real+1));
	$('.main_section03 ul.text li.on').removeClass('on');
	$('.main_section03 ul.text li').eq(real).addClass('on');
	$('.main_section03 .slide').addClass('slide0'+(real+1));
});
$(document).on("click",".main_section03 .swiper-slide-next",function(){
	$(".main_section03 .next").trigger("click")	;
})
$(document).on("click",".main_section03 .swiper-slide-prev",function(){
	$(".main_section03 .prev").trigger("click")	;
})


function midslide(){
	var winW = $(window).width();
	swiper2 = new Swiper(".main_section04 .mo_view .mySwiper2", {
		pagination: {
			el: ".main_section04 .mo_view .swiper-pagination",
		},
		loop:true
	});
	$(".main_section04 .imgs div").eq(0).addClass("on");
	swiper2.on('slideChange', function () {
    	$(".main_section04 .mo_view .swiper-pagination > span").removeClass("swiper-pagination-bullet-active");
    	$(".main_section04 .mo_view .swiper-pagination > span").eq(this.realIndex).addClass("swiper-pagination-bullet-active");
    	$(".main_section04 .imgs div").removeClass("on");
    	$(".main_section04 .imgs div").eq(this.realIndex).addClass("on");
//    	console.log(this.realIndex)
	});
}
function H(){
	var H = $(window).outerHeight();
	$(".main_section").each(function(){
		$(this).css("height",H);
	});
	$(".main_section02").css("height",H*2);
}

function mainAni(){
	var winH = $(window).height(),
		allH = $(".container").height(),
		sec02 = $(".main_section02").offset().top,
		sec03 = $(".main_section03").offset().top,
		Txt = $(".main_section03 h2").offset().top,
		top = $(window).scrollTop(),
		foot = $(".footer").height();
	
	$(".main_section01").attr("data-0","transform:scale(1)");
	$(".main_section01").attr("data-"+(winH),"transform:scale(0.63);");

	$(".main-bgani").attr("data-"+(winH-(winH/2)-50),"transform:scale(1.63); opacity:0; z-index:1;");
	$(".main-bgani").attr("data-"+(winH-(winH/2)),"transform:scale(1.63); opacity:1; z-index:4;");
	$(".main-bgani").attr("data-"+(winH),"transform:scale(1); opacity:1; z-index:4;");
	
	$(".main-introwr").attr("data-"+(winH*2),"display:block;");
	$(".main-introwr").attr("data-"+((winH*2)+100),"display:none;");
	
	$(".main-textani").attr("data-"+(winH*2)," opacity:0; ");
	$(".main-textani").attr("data-"+((winH*2)+100),"transform: translate(900%, 100%) scale(300); opacity:1; ");
	$(".main-textani").attr("data-"+(Txt-(winH/2)-(winH/2)),"transform: translate(0%,100%) scale(10); opacity:1;");
	$(".main-textani").attr("data-"+(Txt-(winH/2)),"transform: translate(-50%,-50%) scale(1); opacity:1;");
	$(".main-textani").attr("data-"+(Txt-(winH/2)+10),"transform: translate(-50%,-50%) scale(1); opacity:0;");

	$(".main_section03 h2").attr("data-"+(Txt-(winH/2)),"opacity:0;");
	$(".main_section03 h2").attr("data-"+(Txt-(winH/2)+10),"opacity:1;");
	

	$(".footer").attr("data-"+(allH-foot-winH-10),"opacity:0;");
	$(".footer").attr("data-"+(allH-foot-winH),"opacity:1;");
	
	$(".section").each(function(){
		var secTop = $(this).offset().top;
		$(this).attr("data-"+(secTop-(winH/2)),"@add:off");
		$(this).attr("data-"+(secTop-(winH/2)+100),"@add:on");
	})
	
}

