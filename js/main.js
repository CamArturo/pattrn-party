const accordion = $(".accordion-container");

$(function () {
  accordion.children("li").first().children("a").addClass("active")
    .next().addClass("is-open").show();

  accordion.on("click", "li > a", function () {

    if (!$(this).hasClass("active")) {

      // hide the previous tab with class "is-open"
      $(".accordion-container .is-open").removeClass("is-open");

      //.hide()

      // find the next sibling (paragraph section) and toggle 'is-open'
      $(this).next().toggleClass("is-open").toggle();

      // find active remove it
      $(".accordion-container").find(".active").removeClass("active");

      // reassign this li class of active
      $(this).addClass("active");
    }
    else {
      $(".accordion-container .is-open").removeClass("is-open");
      $(this).removeClass("active");
    }
  });

  if (!Modernizr.mq("(max-width: 768px)")) {
    let combinedHeight = $('.accordion').height();
    $(".main-container > .btn-container").css("margin-top", combinedHeight + 150);
  }

  $(window).on("resize", function () {
    let combinedHeight;
    if (!Modernizr.mq("(max-width: 768px)")) {
      combinedHeight = $('.accordion').height();
      $(".main-container > .btn-container").css("margin-top", combinedHeight + 150);
    }
  });

  // Header
  $(".header-bar-container").addClass("js");

  $(".mobile-nav").on("click", (e) => {
    e.preventDefault();
    $(".menu-link").toggleClass("active");
    $("#menu").toggleClass("active");
  });
});