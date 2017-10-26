var difRadio="medio";
var primeiro="eu";
var secPlayer="com";
var tabSize = 2;
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
}

function peca(col,row){
  document.getElementById("peca"+col+row).style.borderColor = 'red';
}

function setSize(tam){
  tabSize = tam;
}

function startGame(){
  hide("menu");
  show("top");
  tableMaker(tabSize);
}

function tableMaker(tam){
  var tabela = document.createElement("div");
  tabela.setAttribute("class", "tabela");
  document.body.appendChild(tabela);
  var coluna;
  var peca;
  var interval;

  switch(tam){
    case 1:
      for(i=0; i<3; i++){
        coluna = document.createElement("div");
        coluna.setAttribute("class", "coluna");
        tabela.appendChild(coluna);
        for(j=0; j<i+1; j++){
          peca = document.createElement("button");
          peca.setAttribute("id","peca"+i+j);/**/
          peca.setAttribute("onclick","peca("+i+","+j+");");/**/
          interval = document.createElement("br");
          coluna.appendChild(peca);
          coluna.appendChild(interval);
        }
      }
      break;

    case 2:
      for(i=1; i<=3; i++){
        coluna = document.createElement("div");
        coluna.setAttribute("class", "coluna");
        tabela.appendChild(coluna);
        for(j=0; j<(i*2)-1; j++){
          peca = document.createElement("button");
          peca.setAttribute("id","peca"+i+j);/**/
          peca.setAttribute("onclick","peca("+i+","+j+");");/**/
          interval = document.createElement("br");
          coluna.appendChild(peca);
          coluna.appendChild(interval);
        }
      }
      break;

    case 3:
      for(i=0; i<5; i++){
        coluna = document.createElement("div");
        coluna.setAttribute("class", "coluna");
        tabela.appendChild(coluna);
        for(j=0; j<i+1; j++){
          peca = document.createElement("button");
          peca.setAttribute("id","peca"+i+j);/**/
          peca.setAttribute("onclick","peca("+i+","+j+");");/**/
          interval = document.createElement("br");
          coluna.appendChild(peca);
          coluna.appendChild(interval);
        }
      }
      break;
  }
}
