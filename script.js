var difRadio="medio";
var tabSize;

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
	show("menu");
	hide("login");
	difRadio= "medio";
	tabSize = "med";
}

function peca(){
	/*nao funciona*/
	document.getElementById('peca').style.backgroundColor = "red";
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
