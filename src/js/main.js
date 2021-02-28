import $ from "jquery";
import "popper.js";
import "bootstrap";

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.to-right',
          prevEl: '.to-left',
        },
            autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
      });

    AOS.init();

})