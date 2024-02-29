"use strict";

/* *******************************************************
 * 파일이름 : common.js
 * 설명 : custom js
 * 최종업데이트 : 2024-02-29
 ******************************************************** */

var common = (function () {
  return {
    init: function () {
      // common.header();
      // common.container();
      // common.footer();
    },

    // header: function () {
    //   console.log("header js코드");
    // },
    // container: function () {
    //   console.log("container js코드");
    // },
    // footer: function () {
    //   console.log("footer js코드");
    // },
  };
})();

window.addEventListener("load", function () {
  common.init();
  var myElement = document.getElementById("simpleBar");
  new SimpleBar(myElement, { autoHide: true });
});
