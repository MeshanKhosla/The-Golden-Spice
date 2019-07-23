$(document).ready(function() {
  // !Fixed navbar
  let div = $(".navbar");
  let start = $(div).offset().top;

  $.event.add(window, "scroll", function() {
    let p = $(window).scrollTop();
    $(div).css("position", p > start ? "fixed" : "static");
    $(div).css("top", p > start ? "0px" : "");
  });

  // !Card animation
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

// Loading in animation
const carousel = $(".main-carousel");
const nav = $(".navbar");
const hours = $(".home-gradient-info");
const body = $(".index-body");
const tl = new TimelineMax();

tl.fromTo(carousel, 1.5, { x: "-1000px" }, { x: "0px" })
  .fromTo(nav, 1.5, { x: "1500px" }, { x: "0px" }, "-=1.5")
  .fromTo(hours, 1.5, { x: "1000px" }, { x: "0px" }, "-=1.5")
  .fromTo(body, 1.5, { opacity: "0.5" }, { opacity: "1" });
