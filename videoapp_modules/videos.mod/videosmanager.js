var VideoManager=(function () {
	var url1="http://www.mocky.io/v2/5a60ae3f1000001d1c307a8d";
	var templateEngine='';

	function displayVideos(data){
		GestorModPlantillas.render(templateEngine,data);
	}


	function saveStorage (data) {
		window.localStorage.setItem('videos', JSON.stringify(data));
	}

	function getFromMocky (url) {
		$.get(url, function(data) {
			console.log(data);
			saveStorage (data);
			displayVideos(data);
		});
	}

	function loadFromLocalStorage (tengine) {
		templateEngine=tengine;
		var data= window.localStorage.getItem('videos');

		if(data){
			displayVideos(JSON.parse(data));
			setTimeout(function () {
				getFromMocky(url1);
			},3000);
		}else{
			getFromMocky(url1);
		}
	}

	return {
		render:loadFromLocalStorage
	}
})();//call module with templateEngine global var
