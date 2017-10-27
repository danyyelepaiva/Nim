var difRadio;
var primeiro=0;
var secPlayer="com";
var tabSize = 2;
var tabCol;
var tabLin;
var nomeJogador;
var password;
var i=1;

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


function gerente(){

}

function jogada(){
  var coluna;
  var linha;
  switch(tabSize){
    case 1:
      break;
  }
  coluna = Math.floor((Math.random()*tabCol)+1);
  linha = Math.floor((Math.random()*tabLin[coluna])+1);
  alert(coluna + " " + linha);
  peca(coluna, linha);
  primeiro=2;
}

function peca(col,row){
    row2 = row;
    if(document.getElementById("peca"+col+row2).style.backgroundColor != 'grey'){
      while(document.getElementById("peca"+col+row2)){
        document.getElementById("peca"+col+row2).style.backgroundColor = 'grey';
        row2++;
      }
      primeiro=1;
    }
}

function setSize(tam){
  tabSize = tam;
}
function first(pr){
  primeiro = pr;
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
      for(i=1; i<=3; i++){
        coluna = document.createElement("div");
        coluna.setAttribute("class", "coluna");
        tabela.appendChild(coluna);
        for(j=1; j<=i; j++){
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
      for(i=1; i<=4; i++){
        coluna = document.createElement("div");
        coluna.setAttribute("class", "coluna");
        tabela.appendChild(coluna);
        for(j=1; j<=i; j++){
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
      for(i=1; i<=5; i++){
        coluna = document.createElement("div");
        coluna.setAttribute("class", "coluna");
        tabela.appendChild(coluna);
        for(j=1; j<=i; j++){
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

for(var i = 0; i < 4; i++){
  rankinglocal[i] = [];
  var dif = rankinglocal[i];
  for(var j = 0; j < 10; j++)
    dif[j] = {nome: "",pontuacao: 0};
}

function loadrank(dif){
  t = document.getElementById("ranking");
    if(t != null)
      t.parentNode.removeChild(t);

    var c;
    for(var r=0; r<3;r++){
      c=rankinglocal[r];
      for( q=0; q<10;q++){
        if(r==0) str='b';
        if(r==1) str='i';
        if(r==2) str='a';
        str=str+q;
        var tp = localStorage.getItem(str);
        var tp1= JSON.parse(tp);
        c[q]=tp1;
      }
    }

    var dificuldade = rankinglocar[dif];
    var tbl= document.createElement('table');
      tbl.setAttribute("id","ranking");
      tbl.border="1";
      var header = tbl.createTHead();
      var row = header.insertRow(0);
      var cell = row.insertCell(0);
      cell.innerHTML = "Nome";
      var cell = row.insertCell(1);
      cell.innerHTML = "Pontuacao";

      for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 3 ; j++){
          var td = document.createElement('td');
          if(dificuldade[i]!=null){
            switch(j){
              case 0: 
                td.appendChild(document.createTextNode(dificuldade[i].name));
                break;
              case 1:
                td.appendChild(document.createTextNode(dificuldade[i].score));
                break;
              case 2:
                td.appendChild(document.createTextNode(dificuldade[i].time));
                break;
            }
          }
          tr.appendChild(td);
        }
        tbl.appendChild(tr);
      }
      document.getElementById("showrank").appendChild(tbl);
}
