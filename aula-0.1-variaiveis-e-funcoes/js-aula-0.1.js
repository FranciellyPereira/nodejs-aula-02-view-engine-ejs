//Comentario em linha JS
/*Cometario em
 bloco */
// Selecionar e apertar CTRL + ; - Atalho para colocar comentario em linha.

//Aprendendo a declaracao de variaveis no JS
// CONST x LET x VAR -> Evitar o uso do VAR
// No escopo global CONST não pode ser alterado

const nome = "Francielly"; // Precisa de um valor
let Nome; // Permite iniciar sem valor
// const nome = "Francielly" -> resulta em um erro
// let nome -> resulta em erro

var cor = "Azul";
var cor = "Amarelo";

let cidade = "Registro";
cidade = "Jacupiranga"; // let permite alterar o valor

const message = "Hello, word! Iniciando estudos.";
console.log(message);

// typeof (esse comando exibirá o tipo da variável)
const estado = "SP";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
// O JavaScript é uma linguagem de tipagem dinâmica e tipagem fraca.
//////////////////////////////////////////
// TIPOS DE FUNÇÕES NO JAVASCRIPT
function minhaFuncao() {}
console.log(typeof minhaFuncao);
//FUNÇÃO SIMPLES
function saudacao() {
  console.log("Olá, bem-vindo!");
}
saudacao();

// FUNÇÃO COM PARÂMETRO / ARGUMENTO
// Parâmetro -> É um dado que a função recebe
// Argumento -> É o dado que é enviado para a função
function Saudacao(nome) {
  //Parâmetro
  console.log("Olá, seja muito bem-vinda " + nome); //Concatenando
  console.log(`Olá, seja muito bem-vinda ${nome}`); //Usando TEMPLATE STRINGS ->${} <-placeholder
}
Saudacao("Francielly."); //ARGUMENTO

// FUNÇÃO COM MAIS DE UM PARÂMETRO
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números foi ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

//FUNÇÃO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois números foi ${Soma(2, 6)}.`);

//FUNÇAO COM MAIS DE UM RETORNO
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`número ${num} é ${parImpar(num)}`);

// FUNÇÃO ANÔNIMA
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`O dobro do número é ${dobro(15)}!`);
// FORMATAR CÓDIGO SHIFT+ALT+F

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO 
// FUNÇÃO FLECHA
const Dobro = x => {
    return x*2
}
console.log(`Função dobro com arrow function. Resultado: ${Dobro(20)}.`)

// FUNÇÃO FLECHA
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação é  ${calc(6, '*', 6)}.`)

//SIMPLIFICANDO ARROW FUNCTION
const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação é  ${Calc(6, '*', 6)}.`)

//IIFE - Immediately Invoked Function Expression
// Função Imediata 
const iife = (function(){
    console.log("Estou sendo executada imediatamente...")
})()

// Função Imediata com Parâmetro
const start = (function(app) {
    console.log(`Executando imediatamente o app ${app}`)
})("WhatsApp")