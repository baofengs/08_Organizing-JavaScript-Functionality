/**
 * Zamiast uruchamiać wszystkie moduły po kolei istnieje możliwość podpięcia eventu który będzie nasłuchiwany w każdym module
 * który powienien uruchomić się w danym momencie
 */

// PLIK app.js

window.EVT = new EventEmitter2();

$(document).ready(function(){
  EVT.emit("init");
});

// PLIK: detalis.js

var Details = (function(){
  
    var $content;
  
    function init() {
      $content = $("[rel=js-details]");
      EVT.on("person-selected", loadPerson);
    }
    
    function loadPerson(ID) {		
      $.ajax("details/" + ID + ".html", { dataType: "text" })
        .then(function(contents){
          $content.html(contents);
        });
    }
  
    EVT.on("init", init);
    
    return {
      init: init,
      loadPerson: loadPerson,
    }
  
  })();
  


/**
 * W pliku detalis/2.html został stworzony link: 
<p>
  <a href="#" rel="js-select-person" data-person="4">Select Another Person</a>
</p>
 * Event na kliknięcie tego linku został uruchomiony w metodzie init(), która uruchamia metodę selectPerson.
 * Metoda ta natomiast zamiast ładować metodę loadPerson(ID) uruchamia event "person-selected",
 * takie rozwiązanie pozwala na połaczenie tego eventu w kliku miejscach, np w krauzeli, która automatycznie przesunie się po klinkięciu w link
 */

var Details = (function(){
    
  var $content;

  function selectPerson(evt) {
    evt.preventDefault();
    var ID = $(evt.target).attr("data-person");
    // loadPerson(ID);
    EVT.emit("person-selected", ID);
  }

  function init() {
    $content = $("[rel=js-details]");

    $content.on('click', "[rel='js-select-person']", selectPerson);

    EVT.on("person-selected", loadPerson);
  }
  
  function loadPerson(ID) {		
    $.ajax("details/" + ID + ".html", { dataType: "text" })
      .then(function(contents){
        $content.html(contents);
      });
  }

  EVT.on("init", init);
  
  return {
    init: init,
    loadPerson: loadPerson,
  }
})();
    


/**
 * W pliku js.carousel.js zostało dodane nasłuchiwanie na event wybrania osoby, co powoduje, ze zmiana wybranej osoby,
 * może nastąpić z dowolnego miejsca w aplikacji.
 */

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
		EVT.emit("person-selected", ID);
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

	function setSelectedPerson(ID) {
		position = 185;
		$items.css({ left: (-position * ID) + "px" });
		$("[rel*='js-item-']").css({border: 'none'});
		$("[rel='js-item-" + ID + "']").css({border: '1px solid black'})
	}

	EVT.on('init', init);
	EVT.on('person-selected', setSelectedPerson);
	
	return {
		init: init,
	}
})();