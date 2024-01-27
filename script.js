let qtd = [0, 0, 0, 0, 0];

let qtdElement = document.querySelectorAll(".qtd");

let cartQtd = document.querySelector("qtd");

let carteira = document.getElementById("carteira"),
  saldo = 400,
  gastos = 0;

carteira.innerHTML = "R$"+saldo;

let addBtn = document.querySelectorAll(".add"),
  removeBtn = document.querySelectorAll(".remove");

// botao adicionar
addBtn.forEach((elem, i) => {
  addBtn[i].addEventListener("click", () => {
    qtd[i] += 1;
    qtdElement[i].innerHTML = qtd[i];
    cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4];
  });
});

removeBtn.forEach((elem, i) => {
  removeBtn[i].addEventListener("click", () => {
  qtd[0] -= 1
  if (qtd[0] < 0) {
    qtd[0] = 0
  }
  qtdElement[i].innerHTML = qtd[i]
  cartQtd.innerHTML = qtd[0] + qtd[1] + qtd[2] + qtd[3] + qtd[4]
  });
});

function buy() {
  gastos = (qtd[0]*40) + (qtd[1] * 50) + (qtd[2] * 27.99) + (qtd[3] * 29.99) + (qtd[4] * 21.90)
  if (gastos > saldo){
    gastos = 0;
    alert("saldo insuficiente");
  } else {
    saldo = saldo - gastos;
    carteira.innerHTML = "R$"+saldo.toFixed(2);
  }

  if (saldo == 0 || saldo == 0.00){
    carteira.style.backgroundColor = "rgb(255, 163, 163)";
    carteira.style.border = "2px solid rgb(255, 163, 163)";
  }
} 