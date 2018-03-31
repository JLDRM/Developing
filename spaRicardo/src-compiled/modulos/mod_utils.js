"use strict";

var Utils = function () {
	function loadmenus() {
		$("a[link]").click(function (event) {
			event.preventDefault();
			Router.change(this.getAttribute("link")).subscribe(function (res) {
				return Utils.loadmenus();
			});
		});
	}

	return {
		loadmenus: loadmenus
	};
}();
//# sourceMappingURL=mod_utils.js.map
