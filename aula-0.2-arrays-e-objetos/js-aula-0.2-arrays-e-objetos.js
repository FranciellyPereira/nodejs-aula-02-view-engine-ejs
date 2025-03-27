// ARRAYS (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos índices...");
console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

console.log("Exibindo a lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo a lista através do forEach...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo a lista através do forEach com os índices...");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

//MÉTODOS DE VETORES
let vetor = [`Laranja`, ` Maça`, ` Banana`];
console.log(`Nosso vetor é o:${vetor}`);
vetor[3] = ` Morango`;
console.log(`Nosso vetor agora é o: ${vetor}`);

//Método PUSH - Insere um novo elemento no FINAL do vetor
vetor.push(` Abacaxi`);
console.log(`Nosso vetor agora é o: ${vetor}`);

//Método UNSHFT - Insere novo elemento no INÍCIO do vetor

vetor[0] = ` Pera`;
console.log(`Nosso vetor agora é o ${vetor}`);
vetor.unshift(` Laranja`);
console.log(`Nosso vetor agora é o ${vetor}`);

// Método LENGTH - Retorna o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3, 800, 200];
console.log(`Nossa lista de números é: ${numeros}`);
console.log(`O número de elementos do vetor é ${numeros.length}.`);

//Método SORT - Ordenar o vetor
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}`);
vetor.sort();
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}`);
console.log(`NOssa lista de frutas ordenada é: ${vetor}`);

//Ordenação de nùmeros com SORT - Usa uma casa decimal
console.log(`Nossa lista de números é ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de números ordenadas é: ${numeros}`);

// Ordenando de forma crescente
console.log(numeros.sort((a, b) => a - b));

// Ordenando de forma decrescente
console.log(numeros.sort((a, b) => b - a));

//////////////////////////////////////////////////////////////
//OBJETOS LITERAIS (Não são derivados de classes)
//Objetos possuem Atributos (características) e Métodos (ações)
//Lado esquerdo : chaves / Lado direito : valores
const pessoa = {};
console.log(typeof pessoa);
const carro = {
  //Atributos

  modelo: "gol",
  cor: "vermelho",
  //Métodos

  acelerar() {
    console.log(`Acelerando...`);
  },
  freando() {
    console.log(`Frear...`);
  },
};
console.log(`O modelo do carro é ${carro.modelo}.`);
console.log(`A cor do carro é ${carro.cor}.`);
carro.acelerar();
carro.freando();

/////////////////////////////////////

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC modelo com bom desempenho.",
};
console.log(produto);
console.log(
  `O ${produto.nome} da marca ${produto.marca} custa apenas ${produto.preco}. ${produto.descricao}`
);

////////////////////////////

// ARRAY DE OBJETOS
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC modelo com bom desempenho.",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento.",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Utra resistente. Muito barato.",
  },
];
console.log(); // pular linha

//Exibindo o ARRAY DE OBJETOS com forEach

listaProdutos.forEach((produto) => {
  console.log(`Produto: ${produto.nome}`);
  console.log(`Marca: ${produto.marca}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Descrição: ${produto.descricao}`);
  console.log();
});
listaProdutos.forEach((produto) => {
  console.log(`Produto: ${produto.nome}`);
  console.log(`Marca: ${produto.marca}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Descrição: ${produto.descricao}`);
  console.log();
});

console.table(listaProdutos);