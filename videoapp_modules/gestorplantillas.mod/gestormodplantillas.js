var GestorModPlantillas=(function () {
	var template=null;

	function renderiza(nombreTemplateEngine,data){
		if(nombreTemplateEngine=='hbs') _renderizadorHBS(data);
		else if(nombreTemplateEngine=='mst') _renderizadorMustache(data);
		else{_renderizadorNone(data)}
	}

	function _renderizadorHBS (data) {
		if(!template){
			$.get('./gestorplantillas.mod/templates/videos.hbs.htm', function (tmpl) {
				template=Handlebars.compile(tmpl);
				// console.log(data,template(data));
				_applyTemplateHBS('#lista_videos',template,data);
			}, 'html');
		}else{
			_applyTemplateHBS('#lista_videos',template,data);
		}
	}

	function _applyTemplateHBS(target,tmpl,data){
		$(target).empty();
		$(target).append(tmpl(data));
	}

	function _renderizadorMustache (data) {
		if(!template){
			$.get('./gestorplantillas.mod/templates/videos.mst.htm', function (tmpl) {
				template=tmpl;
				_applyTemplateMST('#lista_videos',template,data);
			}, 'html');
		}else{
			_applyTemplateMST('#lista_videos',template,data);
		}
	}

	function _applyTemplateMST(target,tmpl,data){
		$(target).empty();
		$(target).append(Mustache.render(tmpl,data));
	}

	function _renderizadorNone (data) {
		$('#lista_videos').empty();
		$('#lista_videos').append('Sin motor de plantillas');
	}

	return {
		render:renderiza
	}
})();