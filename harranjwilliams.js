$(document).ready(function() {
  var t=$("#top");
  var e=window.location.pathname.split("/");
  "tagged"!==e[1]&&"page"!==e[1]&&"search"!==e[1]&&"day"!==e[1]||$(t).removeClass("is-home").addClass("is-nothome");
  $(".is-nothome .hp-only").remove();
  $(".is-home .hp-hide").remove();
});
$(document).ready(function() {
  var t=$(".js-menu-toggle");
  $(t).click(function() {
    $("#menu").toggle(),$(".menu-toggle-open").toggle()
  })
});
$(document).ready(function() {
  var t=$(".back-top");
  $(t).hide();
  $(function() {
    $(window).scroll(function() {
      $(this).scrollTop()>100?$(t).fadeIn():$(t).fadeOut()
    });
    $(t).click(function() {
      return $("body,html").animate({scrollTop:0},800),!1
    })
  })
});
$(document).ready(function() {
  var t = $("#top");
  var e = $(".widgets-overlay-link");
  $(e).click(function(e) {
    e.preventDefault();
    var i = $(this).attr("href");
    $(i).toggleClass("visible");
    $(t).toggleClass("has-overlay-visible").delay(500).animate({scrollTop:0},800)
  })
});
