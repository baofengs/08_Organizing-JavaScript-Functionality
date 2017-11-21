/**
 * Animacja w karuzeli odbywa się po przez zmianę parametru left w css, natomiast w momencie kiedy ten parametr się zmieni ustawione 
 * jest transition w css, wygląda to nastepująco:
 * 
 * 
 
#carousel > .content > .items {
	position: absolute;
	white-space: nowrap;
	left: 0px;
	transition: left 0.5s ease-out;
	overflow: hidden;
}

 * transition wypływa tylko na parametr left z opóźnieniem 0.5s typu ease-out
 */

$(document).ready(function(){
  
    function scrollLeft(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();
  
      if (position > 0) {
        position = Math.max(0,position - 250);
      }
  
      $items.css({ left: (-position) + "px" });
    }
  
    function scrollRight(evt){
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();
  
      if (position < maxPosition) {
        position = Math.min(maxPosition,position + 250);
      }
  
      $items.css({ left: (-position) + "px" });
    }
  
    var $content = $("[rel=js-carousel] > [rel=js-content]");
    var $items = $content.children("[rel=js-items]");
    var $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
    var $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");
  
  
    var contentWidth = $content.width();
    var itemsWidth = $items.width();
    var position = 0;
    var maxPosition = (itemsWidth - contentWidth);
  
    $left.on('click', scrollLeft);
    $right.on('click', scrollRight);
  
  });
  