// Fixed navbar
$(document).ready(function() {
  let div = $(".navbar");
  let start = $(div).offset().top;

  $.event.add(window, "scroll", function() {
    let p = $(window).scrollTop();
    $(div).css("position", p > start ? "fixed" : "static");
    $(div).css("top", p > start ? "0px" : "");
  });
});

//Card animation
$(document).ready(function() {
  $(".card").hover(
    // Trigger when mouse hovers over
    function() {
      $(this).animate(
        {
          marginTop: "-=1%"
        },
        200
      );
    },

    // Trigger when mouse out
    function() {
      $(this).animate(
        {
          marginTop: "0px"
        },
        200
      );
    }
  );
});
