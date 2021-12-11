$(".header__btn-menu").on("click", function () {
  $(".menu, .header__btn-menu").toggleClass("active");
  $("body").toggleClass("lock");
});
