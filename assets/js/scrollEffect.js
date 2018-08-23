$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 645) {
			$(".box2").css({"background-attachment" : "fixed"})
		}
		else {
			if ($(this).scrollTop() < 800) {
				$(".box2").css({"background-attachment" : "inherit"})		
			}	
		}
	})
})