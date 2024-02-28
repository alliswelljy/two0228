/* *********************
 * 설명: 사이드메뉴
 *********************** */
$(document).ready(function () {
  $(".one-depth > li").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("on")) {
      return;
    } else {
      $(".one-depth > li").each(function () {
        $(this).children("ul").stop().slideUp(300);
        $(this).removeClass("on");
      });
      //클릭한 요소 on추가
      $(this).children("ul").stop().slideDown(300);
      $(this).addClass("on");
    }
  });

  $(".two-depth > li").click(function () {
    $(".two-depth > li > a").css("color", "rgba(255, 255, 255, 0.3)");
    $(this).children("a").css("color", "rgba(255, 255, 255, 1)");
  });
});

window.addEventListener("load", function () {});
