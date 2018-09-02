$(document).ready(function(){

/* Must find a way to simplify the scroll effect, 
thinking if the number of boxes increase */

	$(window).scroll(function(){

		// Set scroll to first box
		if ($(this).scrollTop() > 1) {
			$(".box2").css({"background-attachment" : "fixed"});
			$(".box3").css({"background-attachment" : "fixed"});
		}
	})

// Add active link class
  $(".HeaderLinks").click(function() {
  	$(".HeaderLinks").removeClass("active");
    $(this).addClass("active");

  });

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