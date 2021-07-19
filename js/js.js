$(document).ready(function () {
  $('a[href="#form"]')
    .not(".policy")
    .click(function (evt) {
      evt.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".form").offset().top,
        },
        400
      );
      return false;
    });
});
