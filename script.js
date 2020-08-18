/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */
const listaProdutos = ['Torta de Maçã', 'Torta de Cereja', 'Torta de Abóbora', 'Torta de Banana'];

const listaProdutosDetalhada = [
  {
    id: 1,
    produto: 'Torta de Maçã',
    preco: 599,
    quantidade: 5
  },
  {
    id: 2,
    produto: 'Torta de Cereja',
    preco: 799,
    quantidade: 2
  },
  {
    id: 3,
    produto: 'Torta de Abóbora',
    preco: 1000,
    quantidade: 1
  },
  {
    id: 4,
    produto: 'Torta de Banana',
    preco: 499,
    quantidade: 10
  }
]
