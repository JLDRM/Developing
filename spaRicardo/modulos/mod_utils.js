var Utils=(function() {
	function loadmenus() {
		$("a[link]").click(function(event) {
			event.preventDefault();
			Router.change(this.getAttribute("link")).subscribe(function(res){Utils.loadmenus();});
		});
	}

	return {
		loadmenus:loadmenus
	};

})();