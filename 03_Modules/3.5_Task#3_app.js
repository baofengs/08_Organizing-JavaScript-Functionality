/**
 * Został stworzony plik js/app.js dzieki któremu nie trzeba wywoływać w każdym module
 * komendy $(document).ready(), wystarczy że zostanie on wywołany jednorazowo w pliku app.js
 * a w nim zostaną uruchominione poszczególne moduły, w tym przypadku nie są one wywoływane 
 * przez callback, dlatego używane jest wywołanie metody z nawiasami
 */

$(document).ready(function(){
  Header.init();
  Carousel.init();
  Details.init();
});