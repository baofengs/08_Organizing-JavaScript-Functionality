/**
 * W obecnym przykładzie wykorzystano komunikację między modułami
 * 
 * Przeniesiono event typu click z modułu Detalis do modułu carusel, przyczyną tego jest fakt że w tym module są juz załadowane elementy $items, więc nie ma sensu się powtarzać. 
 * 
 * Następnie w module carousel stworzono metodę, clickPerson() zamiast personClicked(), taka konwencja informuje, ze wykonał się dany event
 * 
 * Następnie w metodzie clickPerson() pobrano ID i odwołano się do modułu Detalis, gdzie została wyprowadzona na zewnątrz metoda loadPerson();
 */

 
// ------------------------------------------------------------------------------------------- //
// PLIK Detalis.js

var Details = (function(){
  
    var $content;
  
    function init() {
      $content = $("[rel=js-details]");
  
    }
    
    function loadPerson(ID) {		
      $.ajax("details/" + ID + ".html", { dataType: "text" })
        .then(function(contents){
          $content.html(contents);
        });
    }
    
    return {
      init: init,
      loadPerson: loadPerson,
    }
  
  })();
  
  $(document).ready(Details.init);

// ------------------------------------------------------------------------------------------- //
// PLIK carousel.js
  
  var Carousel = (function(){
    
    var $content;
    var $right;
    var $items;
    var $left;
  
    var contentWidth;
    var maxPosition;
    var itemsWidth;
    var position;
    
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
  
      $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
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
  