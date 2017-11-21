var Carousel = (function(){
	
	var $content;
	var $items;
	var $left;
	var $right;

	var position;
	var maxPosition;
	var itemsWidth;
	var contentWidth;
	
	function init() {
		$content = $("[rel=js-carousel] > [rel=js-content]");
		$items = $content.children("[rel=js-items]");
		$left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
		$right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");


		contentWidth = $content.width();
		itemsWidth = $items.width();
		position = 0;
		maxPosition = (itemsWidth - contentWidth);
		
		$left.on('click', scrollLeft);
		$right.on('click', scrollRight);
		$items.on('click', "[rel*='js-item-']", clickPerson);
	}

	function clickPerson(evt) {
		var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
		Details.loadPerson(ID);
	}

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

	return {
		init: init,
	}
})();

$(document).ready(Carousel.init);
