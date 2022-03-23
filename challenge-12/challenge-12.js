(() => {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

  const person = { name: "gustavo", lastname: "melo", age: 23 };

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */

  console.log('Propriedades de "person":', Object.keys(person));

  /*
Crie um array vazio chamado `books`.
*/
  const books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  books.push(
    { name: "book 1", pages: 100 },
    { name: "book 2", pages: 200 },
    { name: "book 3", pages: 300 }
  );

  /*
  Mostre no console todos os livros.
  */
  console.log("\nLista de livros:", books);

  /*
  Remova o último livro, e mostre-o no console.
  */

  console.log("\nLivro que está sendo removido:", books.pop());

  /*
  Mostre no console os livros restantes.
  */

  console.log("\nAgora sobraram somente os livros:", books);

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  const stringObjs = JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
  console.log("\nLivros em formato string:", stringObjs);

  /*
Converta os livros novamente para objeto.
*/
  // ?
  console.log(
    "\nAgora os livros são objetos novamente:",
    JSON.parse(stringObjs)
  );

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  console.log(books[0], books[1]);
  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  const myName = ["l", "u", "i", "z"];

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  console.log("\nMeu nome é:", myName.join(""));

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log("\nMeu nome invertido é:", myName.reverse());

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log("\nAgora em ordem alfabética:", myName.sort());
})();
