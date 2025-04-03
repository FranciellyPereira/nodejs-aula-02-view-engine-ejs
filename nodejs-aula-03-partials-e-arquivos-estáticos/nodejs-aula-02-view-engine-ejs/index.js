const express = require("express");
const app = express();

// Configuração do EJS como template engine
app.set("view engine", "ejs");

// Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// Rota de perfil
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

// Rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  // Lista de produtos (simulação de um banco de dados)
  const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Coletando o parâmetro da rota
  const produto = req.params.produto;

  // Verificando se um produto específico foi solicitado
  if (produto) {
    res.render("produtos", { produto, produtos: null }); // Exibe um único produto
  } else {
    res.render("produtos", { produto: null, produtos }); // Exibe a lista de produtos
  }
});

// Iniciando o servidor
app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso em http://localhost:8080");
  }
});
