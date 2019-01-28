// mobile "coming soon" page under 768px
function myFunction(x) {
  if (x.matches) { // if media query matches
    document.getElementsByClassName('mobile')[0].style.display = 'block'; // show fullscreen mobile class
    document.body.style.overflow = 'hidden'; // hide overflow of body (doesn't work)
    var elems = document.getElementsByClassName('column_container about'); // hides column_container classes (not sure if works)
    for(var i = 0; i < elems.length; i++) {
    elems[i].style.visibility = 'hidden';
}
  }
}
var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // call listener function at run time
x.addListener(myFunction) // attach listener function on state changes



// to autoplay videos correctly
 $(document).ready(function() {
     $('video').prop('muted',true).play()
 });


// to show project description for each image
$(window).on("scroll resize", function(){
    var pos=$('#project_description').offset();
    $('.image_description').each(function(){
        if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top)
        {
            $('#project_description').html($(this).html()); // or find another way to get the project_description
            return; // breaks the loop
        }
    });
});


// add smooth scrolling to all anchor links
$(document).ready(function(){
  $("a").on('click', function(event) {
    // make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // prevent default anchor click behavior
      event.preventDefault();
      // store hash
      var hash = this.hash;
      // using jQuery's animate() method to add smooth page scroll
      // the optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // end if
  });
});