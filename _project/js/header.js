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