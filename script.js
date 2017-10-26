var difRadio="medio";
var primeiro="eu";
var secPlayer="com";
var tabSize;
var nomeJogador;
var password;

window.onload = function(){
  hide("top");
  hide("menu");
};

function hide(eid){
  document.getElementById(eid).style.display = 'none';
}

function show(eid){
  document.getElementById(eid).style.display = 'inherit';
}


function hide_login() {
  nomeJogador = document.getElementById("nomeJogador").value.toString();
  password = document.getElementById("pwrd").value.toString();
  show("menu");
  hide("login");
  difRadio= "medio";
  tabSize = "med";
}

function peca(){

}

function startGame(){
  hide("menu");
  show("top");
  tableMaker(tabSize);

}


function tableMaker(tam){
  var coluna = document.createElement("div");
  coluna.setAttribute("id", "peca");
  document.body.appendChild(coluna);


}
