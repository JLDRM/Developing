function initAll () {
	var url1="http://www.mocky.io/v2/5a6a04c82e0000a02c7a76d5";

	function displayVideos(data){
		console.log(data);
		var tempo = Handlebars.templates['template.hbs'](data); 
		$('body').append(tempo);
		
	}

	function saveStorage (data) {
		window.localStorage.setItem('videos', JSON.stringify(data));
	}


	function loadFromLocalStorage () {
		var data= window.localStorage.getItem('videos');

		if(data)displayVideos(JSON.parse(data));
		setTimeout(function (argument) {
			$.get(url1, function(data) {
				console.log(data);
				saveStorage (data);
				displayVideos(data);
			});
		},3000);
	}

	loadFromLocalStorage ();






}

initAll();	









