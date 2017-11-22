/**
 * Event emitter 2 to zewnętrzna biblioteka pozwalająca na komunikację między modułami
 */



//PLIK: app.js

/**
 * Tworzę zmienną globalną window.EVT do której tworzę instancję EventEmitter 
 */
$(document).ready(function(){
  
    window.EVT = new EventEmitter2();
  
    Header.init();
    Carousel.init();
    Details.init();
  });

// PLIK: carousel.js
/**
 * Emituje zmiany które nazywam person-seleced oraz przesyłam dane jako ID
 */
function clickPerson(evt) {
  var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
  EVT.emit("person-selected", ID);
}

// PLIK: details.js
/**
 * Odbieram zmiany oraz dane które przesyłam do metody loadPerson
 */
var Details = (function(){
  
    var $content;
  
    function init() {
      $content = $("[rel=js-details]");
      EVT.on("person-selected", loadPerson);
    }
    
// .........