/**
 * Mogę zwrócić funkcję w funkcji i przejąć ją przez zmienną, co spowoduje, że 
 * następnym razem kiedy wywołam tą zmienną jako funkcje spowoduje to zapamiętanie
 * wywołanego parametru.
 */

function Hello(name) {

  function speak() {
    console.log(name);
  }

  return speak;
}

var fn = Hello("Mateusz");

fn();       // Mateusz


// ----------------------------------------------------

/**
 * Takie wywołanie jak powyżej powoduje że nie jest możliwe odwołanie się do funkcji
 * speak(), jej wywołanie jest możliwe tylko przez wywołanie funkcji fn();
 * 
 * Aby jakość uściślić, co dokładnie dana metoda/funkcja robi, można zwrócić obiekt, 
 * tak jak poniżej, który będzie przekazywał również pola z nazwą funkcji, która nie musi
 * być taka sama jak metoda na którą wykonana jest referencja
 */

function Hello(name) {
  
    function speak(lastName) {
      console.log(name, lastName);
    }
  
    return { 
      say: speak,
    };
}
  
var o = Hello("Mateusz");
  
o.say("Brzostowski");       // Mateusz Brzostowski


// -----------------------------------------------------------------
/**
 * Dzięki takiemu zapisowi można to rozbudować w następujący sposób:
 */

function Hello(name) {
  
    function speak(lastName) {
      console.log(name, lastName);
    }

    function firstName() {
      return name;
    }
  
    return { 
      say: speak,
      firstName: firstName,
    };
}
  
var o = Hello("Mateusz");
  
o.say("Brzostowski");   // Mateusz Brzostowski
o.firstName();          // Mateusz