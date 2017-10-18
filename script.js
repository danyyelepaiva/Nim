window.onload = function(){

	hide("menu");
	hide("table");
}

function hide(eid){
	document.getElementById(eid).style.display = 'none';
}

function show(eid){
	document.getElementById(eid).style.display = 'inline-block';
}

function hide_login() {
	//hide("top");
	//if (esconde) hide("jogo");
	//else show("jogo");
	hide("login");
	show("menu");
	// if(modojogo==1) hide("bsair");
	// return false;
}
