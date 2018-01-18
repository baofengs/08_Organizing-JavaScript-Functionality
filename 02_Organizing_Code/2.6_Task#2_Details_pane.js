/**
 * W tym przykładzie został pobrany parametr z klikniętego elementu a nastepnie zamieniony tylko na liczbę przy wkorzystaniu
 * wyrażenia regularnego. 
 * 
 * Następnie został wykonany request ajax w którym zostały pobrane dane a nastepnie wyświetlone w elemencie $content
 *
 */

$(document).ready(function(){
  
    function personClicked(evt) {
      var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
      debugger;
      
      $.ajax("details/" + ID + ".html", { dataType: "text" })
        .then(function(contents){
          $content.html(contents);
        });
    }
  
    var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
    var $content = $("[rel=js-details]");
  
    $items.on('click', "[rel*='js-item-']", personClicked);  
  });
  

  /**
   * INFO
   * 
   * aby sprawnie debugować aplikację można skorzytać z komendy 
   * 
   * debugger;
   * 
   * zamiast console.log();
   */