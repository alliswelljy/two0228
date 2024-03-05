"use strict";

/* *******************************************************
 * 파일이름 : common.js
 * 설명 : custom js
 * 최종업데이트 : 2024-03-04
 ******************************************************** */

var common = (function () {
  return {
    init: function () {
      common.sideMenuScrollbar();
      common.header();
    },
    sideMenuScrollbar: function () {
      var myElement = document.getElementById("simpleBar");
      new SimpleBar(myElement, { autoHide: true });
    },
    // header: function () {
    //   var accordion_tab = $(".nav-one-depth-ul > li > .nav-link"),
    //     accordion_content = $(".nav-one-depth-ul > li > .dropdown-menu");
    //   //accordion p tag click
    //   accordion_tab.on("click", function (e) {
    //     //tab link 비활성화
    //     e.preventDefault();
    //     //활성화 된 class 제거
    //     accordion_tab.removeClass("show");
    //     //accordion div 내용 숨기기
    //     accordion_content.slideUp(300);
    //     //tab이 숨겨져 있으면 활성화 시키고 div 내용 펼치기
    //     if ($(this).next().is(":hidden") == true) {
    //       $(this).addClass("show");
    //       $(this).next().slideDown(300);
    //     }
    //   });

    //   var accordion_tab2 = $(".nav-two-depth-ul > li > .nav-link"),
    //     accordion_content2 = $(".nav-two-depth-ul > li > .dropdown-menu");
    //   //accordion p tag click
    //   accordion_tab2.on("click", function (e) {
    //     //tab link 비활성화
    //     e.preventDefault();
    //     //활성화 된 class 제거
    //     accordion_tab2.removeClass("show");
    //     //accordion div 내용 숨기기
    //     accordion_content2.slideUp(300);
    //     //tab이 숨겨져 있으면 활성화 시키고 div 내용 펼치기
    //     if ($(this).next().is(":hidden") == true) {
    //       $(this).addClass("show");
    //       $(this).next().slideDown(300);
    //     }
    //   });
    // },
    header: function () {
      const accordionHeaders = document.querySelectorAll(".accordion-header");
      const subAccordionHeaders = document.querySelectorAll(
        ".sub-accordion-header"
      );

      accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
          const accordionItem = this.parentNode;
          const content = accordionItem.querySelector(".accordion-content");

          if (!accordionItem.classList.contains("open")) {
            closeAllAccordions();
            accordionItem.classList.add("open");
            content.style.maxHeight = "100%";
          } else {
            closeAllAccordions();
            accordionItem.classList.remove("open");
            content.style.maxHeight = "0";
          }
        });
      });

      subAccordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
          const subAccordionItem = this.parentNode;
          const content = subAccordionItem.querySelector(
            ".sub-accordion-content"
          );

          if (!subAccordionItem.classList.contains("open")) {
            closeAllSubAccordions();
            subAccordionItem.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            subAccordionItem.classList.remove("open");
            content.style.maxHeight = "0";
          }
        });
      });

      function closeAllAccordions() {
        accordionHeaders.forEach((header) => {
          const accordionItem = header.parentNode;
          const content = accordionItem.querySelector(".accordion-content");
          accordionItem.classList.remove("open");
          content.style.maxHeight = "0";
        });

        closeAllSubAccordions();
      }

      function closeAllSubAccordions() {
        subAccordionHeaders.forEach((header) => {
          const subAccordionItem = header.parentNode;
          const content = subAccordionItem.querySelector(
            ".sub-accordion-content"
          );
          subAccordionItem.classList.remove("open");
          content.style.maxHeight = "0";
        });
      }
    },
  };
})();

window.addEventListener("load", function () {
  common.init();
});
