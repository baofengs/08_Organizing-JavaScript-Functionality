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