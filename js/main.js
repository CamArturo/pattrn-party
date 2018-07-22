const accordion = $(".accordion");

$(function () {
  accordion.children("li").first().children("a").addClass("active")
    .next().addClass("is-open").show();

  accordion.on("click", "li > a", function () {
    if (!$(this).hasClass("active")) {

      console.log("clicked");
      // hide the previous tab with class "is-open"
      $(".accordion .is-open").removeClass("is-open").hide();

      // find the next sibling (paragraph section) and toggle 'is-open'
      $(this).next().toggleClass("is-open").toggle();

      // find active remove it
      $(".accordion").find(".active").removeClass("active");

      // reassign this li class of active
      $(this).addClass("active");
    }
    // else {
    //   $(".accordion .is-open").removeClass("is-open").hide();
    //   $(this).removeClass("active");
    // }
  });
});

// $(window).on("resize", (function () {
//   if (Modernizr.mq("(max-width: 480px)")) {
//     $( "<hr>" ).appendTo( "body > header > h1" );
//   }
// }));