$(document).ready(function(){

/* Must find a way to simplify the scroll effect, 
thinking if the number of boxes increase */

	$(window).scroll(function(){

		// Set scroll to first box
		if ($(this).scrollTop() > 670) {
			$(".box2").css({"background-attachment" : "fixed"});
			$(".details").css({"position" : "fixed", "top" : "120px", "padding" : "0px 100px"})
		}

		else {
			if ($(this).scrollTop() < 800) {
				$(".box2").css({"background-attachment" : "inherit"})
				$(".details").css({"position" : "unset", "padding" : "120px 100px 0px"})
			}	
		}
	})

	$(window).scroll(function(){

		// Set scroll to second box
		if ($(this).scrollTop() > 1410) {
			$(".box3").css({"background-attachment" : "fixed"})
		}

		else {
			if ($(this).scrollTop() < 3000) {
				$(".box3").css({"background-attachment" : "inherit"})		
			}	
		}
	})

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});