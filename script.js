window.onload = function(){

	hide("menu");
	hide("table");
	hide("top");
};

function hide(eid){
	document.getElementById(eid).style.display = 'none';
}

function show(eid){
	document.getElementById(eid).style.display = 'inherit';
}

function hide_login() {
	//hide("top");
	//if (esconde) hide("jogo");
	//else show("jogo");
	show("menu");
	hide("login");
	// if(modojogo==1) hide("bsair");
	// return false;
}

function startGame(){
	hide("menu");
	show("table");
	show("top");
	switch(difRadio) {
    case "facil":
        alert("Fácil");
    		break;
		case "medio":
				//-----------
				break;
		case "dificil":
				//------------
				break;
    default:
				alert("ERRO")
	}
}

//--------dificuldade-----
var difRadio="medio";
function facil(){
	difRadio="facil";
}
function medio(){
	difRadio="medio";
}
function dificil(){
	difRadio="dificil";
}
