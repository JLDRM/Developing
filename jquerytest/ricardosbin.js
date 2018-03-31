

$('form button').click(function(evnt){
	evnt.preventDefault();
	var valores={};
	$('form input:checked[type=checkbox],form input:checked[type=radio]').each(function(){
		valores[this.name]=(valores[this.name]?valores[this.name]+',':'')+this.value;
	});
	$('form input').not('form input[type=checkbox],form input[type=radio]').each(function(){
		valores[this.name]=this.value;
	});

	$('form textarea,form select').each(function(){
		valores[this.name]=this.value;
	});

	console.log(valores);
})