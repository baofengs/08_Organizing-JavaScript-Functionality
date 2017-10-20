/** 
* W JS można odwoływać sie do zmiennych które sa u rodzica, natomiast nie można wywołwyać funkcji która jest 
* dzieckiem dla obecnego miejsca w którym następuje wywołanie
*/

function foo() {
  var a = 1;
  function bar() {
    var b = 2;
    function baz() {
      var c = 3;
      // natomiast zasięg w gór pozwala odwołać się do zmiennych które zostały zadeklarowane wyżej w hierarchi
      console.log(a, b, c); // 1 2 3
    }
    baz();
    console.log(a, b);  // 1 2
  }
  // w tym miejscu funkcja baz(), nie istnieje i nie wywoła się
  bar();
  console.log(a); // 1
}
foo();


/**
 * Bardzo ciekawe rozwiązanie: zwracanie całej funkcji
 * 
 * Pozwala to na wykorzystanie całej funkcji w innym obiekie
 * 
 * W tym przypadku również zastosowano odwoływanie się do zmiennej która instnieje w rodzicu
 */



function makeAdder(x) {
  // parameter 'x' is an inner variable

  // iner function 'add()' uses 'x', o
  // it has a "closure" over it
  function add(y) {
    return y * x;
  }
  // zwraca całą funkcję, nie samą wartość
  return add;
}

var test = makeAdder(10);

test(2);  // zwróci 20;
test(3);  // 30; 
test(4);  // 40;  itd....... 



/**
 * Technika ta nazywa się 
 * 
 * Pozwala ona na pewnego rodzaju zapamiętanie wykonych już czyności, innymi słowy, zostają zapisane dane, 
 * które można później w aplikacji wykorzystać
 */