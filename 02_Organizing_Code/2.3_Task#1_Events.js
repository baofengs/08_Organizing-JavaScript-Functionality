/**
 * Aby odnosić sie do elementów do których chcę przypsiać event mogę to zrobić w sposób masowy,
 * 
 * uruchamiam event 'click' na grupie elementów czyli na: [rel='js-controls'], następnie ograniczam ten event w grupie do elementów które posiadają atrybut: [rel*='js-'],
 * 
 * co znaczy wybierz jakikolwiek plik który ma w właściowości tego atrybutu (rel=) człon 'js-'
 */

// Następnie blokuje standardowe zachowanie obecnego eventu po przez wywołanie metod: 
 
e.preventDefault();
e.stopPropagation();
e.stopImmediatePropagation();

// Spowoduje to że po kliknieciu w element standardowe przeniesienie na inną stronę nie zostanie wykonane



// Plik: js/header.js
$(document).ready(function() {
  // gwiazka znaczy, znajdź jakikolwiek atrybut z taką właściowścią
  // $("[red='js-controls'] > [rel*='js-register']")
  // można też tak:
  $("[rel*='js-register'], [rel*='js-login]")
  $("[rel*='js-register']")

  $("[rel='js-controls']").on('click', "[rel*='js-']", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('asddasds');
  });

});