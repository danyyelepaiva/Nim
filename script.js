var difRadio="medio";
//var tabSize = document.getElementById("tamanho");

window.onload = function(){

	hide("menu");
	hide("table1");
	hide("table2");
	hide("table3");
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
	medio();
	// if(modojogo==1) hide("bsair");
	// return false;
}

function startGame(){
	hide("menu");
	show("top");

	switch(tabSize){
		case "peq":
			show("table1");
			break;
		case "med":
			show("table2");
			break;
		case "grnd":
			show("table3");
			break;
	}

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
function facil(){
	difRadio="facil";
}
function medio(){
	difRadio="medio";
}
function dificil(){
	difRadio="dificil";
}
