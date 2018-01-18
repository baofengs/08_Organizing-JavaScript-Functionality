/**
 * Pytanie: dlaczego warto używać IIFE
 * 
 * Jeśli korzystam z iife mogę nadać alias np dla obiektu window i nazwać go global
 */

(function(global){

  // 98 privates

  // spaghetti goes here

  // these things get public
  global.foo = foo;
  global.bar = bar;

})(window);

/**
 * działa to na takiej samej zasadzie jak $ dla jQuery
 */

(function(global, $){

  // 98 privates

  // spaghetti goes here

  // these things get public
  global.foo = foo;
  global.bar = bar;

})(window, jQuery);

