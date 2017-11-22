var Details = (function(){

	var $content;

	function init() {
		$content = $("[rel=js-details]");
		EVT.on("person-selected", loadPerson);
	}
	
	function loadPerson(ID) {		
		$.ajax("details/" + ID + ".html", { dataType: "text" })
			.then(function(contents){
				$content.html(contents);
			});
	}
	
	return {
		init: init,
		loadPerson: loadPerson,
	}

})();
