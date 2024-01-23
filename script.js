let qtd = [0, 0, 0, 0, 0];

let qtdElement1 = document.getElementById("qtd-1");
let qtdElement2 = document.getElementById("qtd-2");
let qtdElement3 = document.getElementById("qtd-3");
let qtdElement4 = document.getElementById("qtd-4");
let qtdElement5 = document.getElementById("qtd-5");

let cartQtd = document.querySelector("qtd");

let carteira = document.getElementById("carteira");
let saldo = 300;
let gastos = 0;

carteira.innerHTML = "R$"+saldo;


function addItens1() {
  qtd[0] += 1;
  qtdElement1.innerHTML = qtd[0];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function removeItens1() {
  qtd[0] -= 1;
  if (qtd[0] < 0) {
    qtd[0] = 0;
  }
  qtdElement1.innerHTML = qtd[0];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function addItens2() {
  qtd[1] += 1;
  qtdElement2.innerHTML = qtd[1];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function removeItens2() {
  qtd[1] -= 1;
  if (qtd[1] < 0) {
    qtd[1] = 0;
  }
  qtdElement2.innerHTML = qtd[1];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function addItens3() {
  qtd[2] += 1;
  qtdElement3.innerHTML = qtd[2];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function removeItens3() {
  qtd[2] -= 1;
  if (qtd[2] < 0) {
    qtd[2] = 0;
  }
  qtdElement3.innerHTML = qtd[2];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function addItens4() {
  qtd[3] += 1;
  qtdElement4.innerHTML = qtd[3];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function removeItens4() {
  qtd[3] -= 1;
  if (qtd[3] < 0) {
    qtd[3] = 0;
  }
  qtdElement4.innerHTML = qtd[3];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function addItens5() {
  qtd[4] += 1;
  qtdElement5.innerHTML = qtd[4];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function removeItens5() {
  qtd[4] -= 1;
  if (qtd[4] < 0) {
    qtd[4] = 0;
  }
  qtdElement5.innerHTML = qtd[4];
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
}

function buy() {
  gastos = (qtd[0]*40) + (qtd[1] * 50) + (qtd[2] * 27.99) + (qtd[3] * 29.99) + *(qtd[4] * 21.90)
  if (gastos > saldo){
    gastos = 0;
    alert("saldo insuficiente");
  } else {
    saldo = saldo - gastos;
    carteira.innerHTML = "R$"+saldo;
  }
}