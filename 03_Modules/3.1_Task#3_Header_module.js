/**
 * Problemem obecnego rozwiązania aplikacji jest fakt że każda zmienna jest globalna, mimo że zostały wykorzystane oddzielne pliki do skryptów, 
 * powoduje to pewnego rodzaju code smell bo aplikacja nie posiada żadnej organizacji.
 */


 /**
  * Umieszczam funkcję w zmiennej która zostaje automatycznie wywłana za pomocą IIFE patern ()();
  */

var Header = (function() {
  $(document).ready(function() {
  
    var $modal = $("[rel='js-modal']");
  
    $("[rel='js-header'] > [rel='js-controls']").on('click', "[rel*='js-']", function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      var url = $(e.target).attr('href');
      $.ajax(url, {dataType: 'text'}).then(function(contents){
        $modal.html(contents).show();
      });
    });
  });
})();

/**
 * Następująca struktura zmiennej Header powoduje enkapsulację danych, oraz sposób wywoływania metod,
 * 
 * Dzięki temu rozwiązaniu mozna strukturalnie wywoływać metody
 * 
 * Na koniec zwracane jest zwenętrzne api, co pozwala na zewnętrzne wywoływanie metod
 */

var Header = (function() {
  
    var $modal;
  
    function headerLinkCLicks(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        var url = $(e.target).attr('href');
        $.ajax(url, {dataType: 'text'}).then(function(contents){
          $modal.html(contents).show();
        });
    }
  
    function init() {
      $modal = $("[rel='js-modal']");
      $("[rel='js-header'] > [rel='js-controls']").on('click', "[rel*='js-']", headerLinkCLicks);
    }
  
    return {
      init: init,
    }
  
  })();
  
  $(document).ready(Header.init);

/**
 * Na koniec uruchamiany jest cały obiekt za pomocą odwołania się do metody init
 */




/**
 * Jeżeli zrobiłbym to w sposób następujący
 */

 function Header() {
    return {
      init: 5
    }
 }

/**
 * To aby skorzystać z init, musiłałbym dodatkowo tak to wywoływać:
 */

 var o = Hello();

 $(document).ready(o.init);

 // tak to wszystko robię za jednym krokiem