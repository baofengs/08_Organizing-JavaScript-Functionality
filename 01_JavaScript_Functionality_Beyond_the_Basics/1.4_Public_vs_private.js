/**
 * Funkcja upper i zmienna id nie jest dostępna poza funkcją Hello, bo nie jest eksportowana
 * 
 * Dodatkowo, zamiast od razu zwracać obiekt, z parametrami do których się odwołuję, to aby ładniej
 * to wygladało stosuję zmienną public_api, aby wszystko było czytelniejsze.
 * 
 * Gościu dla metod/funkcji używa CamelCase, 
 * a dla zmiennych SnakeCase
 */

function Hello(name) {

  var id = Math.random();
  
  function upper(str) {
    return str.toUpperCase();
  }

  function upperFistName() {
    return name.toUpperCase();
  }

  function speak(lastName) {
    // console.log(upper(name), lastName);
    console.log(upperFirstName(), lastName);
  }
  
  var public_api = {
    say: speak,
  }

  return public_api;
}
  
var o = Hello("Mateusz");
  
o.say('brzostowski'); // MATEUSZ brzostowski