// IMAGE FILTER

(function() {
  $(document).ready(function() {
    var selectedClass = "";
    var portfolioContent = $("#portfolio-container");

    $(".portfolio-item").click(function() {
      selectedClass = $(this).attr("data-rel");

      portfolioContent.fadeTo(100, 0.1);

      portfolioContent
        .find(".img-div")
        .not("." + selectedClass)
        .fadeOut()
        .removeClass("scale-anm");

      setTimeout(function() {
        $("." + selectedClass)
          .fadeIn()
          .addClass("scale-anm");
        portfolioContent.fadeTo(400, 1);
      }, 400);
    });
  });
})();
