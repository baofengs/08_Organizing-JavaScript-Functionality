/**
 * Dlaczego name jest zwracane po przez funkcję?
 * 
 * Robi się tak dlatego, bo wartość name jest tak jakby zapamiętywana, jakbym zwracał name bezpośrednio
 * to w momencie gdy wywołam metodę zmieniającą name, mimo iż zmieniłem jest wartość to i tak zostanie 
 * zwrócona stara wartość
 */


 // zły przykład

function Hello(name) {
  
    function speak(lastName) {
      console.log(name, lastName);
    }

    function changeName(newName) {
      name = newName;
    }
  
    return { 
      say: speak,
      changeName: changeName,
      name: name
    };
}
  
var o = Hello("Mateusz");
  
o.say("Brzostowski");   // Mateusz Brzostowski
o.changeName("Ktoś inny");
o.name;             // Mateusz

// prawidłowe wykonanie

function Hello(name) {
  
    function speak(lastName) {
      console.log(name, lastName);
    }

    function name() {
      return name;
    }

    function changeName(newName) {
      name = newName;
    }
  
    return { 
      say: speak,
      changeName: changeName,
      name: name,
    };
}
  
var o = Hello("Mateusz");
  
o.say("Brzostowski");       // Mateusz Brzostowski
o.changeName("Ktoś inny");
o.name();                   // Ktoś inny

