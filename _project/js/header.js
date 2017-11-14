$(document).ready(function() {

  var $modal = $("[rel='js-modal']");

  $("[rel='js-controls']").on('click', "[rel*='js-']", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    var url = $(e.target).attr('href');
    console.log(url);
    $.ajax(url, {dataType: 'text'}).then(function(contents){
      $modal.html(contents).show();
    });
  });
});