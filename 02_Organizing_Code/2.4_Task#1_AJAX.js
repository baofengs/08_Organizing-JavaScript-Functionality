/**
 * W pliku header.js zostało dodane ładowanie zewnętrznego pliku który domyślnie był wskazywany przez a href='', przy wykorzystaniu ajax z jquery
 * 
 * Działa to w ten sposób, że metoda ajax w pierwszym paramecie przyjmuje url do pliku, a w drugim obiek konfiguracyjny mówiący jak dany plik będzie sie zachowywał
 * 
 * Następnie zwracana treść przez request jest wstrzykiwana do modalu, po czym modal jest pokazywany
 */

$(document).ready(function() {
  
    var $modal = $("[rel='js-modal']");
  
    $("[rel='js-controls']").on('click', "[rel*='js-']", function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      var url = $(e.target).attr('href');
      console.log(url);
      $.ajax(url, {dataType: 'text'}).then(function(contents){
        $modal.html(contents).show();
      });
    });
  });