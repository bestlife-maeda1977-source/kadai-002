import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.scss";

$(document).ready(function() {
  var $grid = $('.grid').imagesLoaded(function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      horizontalOrder: true,
      fitWidth: true,
      // columnWidthはCSSで制御するため指定しなくてOK
    });
  });
});