(() => {
  /*
Envolva todo o código desse desafio em uma IIFE.
*/

  /*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/

  const numberObjects = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
  ];
  console.log("Number Objects Array:", numberObjects);
  // ?

  /*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
  const justNumbers = numberObjects.map((item) => {
    return item.number;
  });

  console.log("\nJust Numbers:", justNumbers);
  // ?

  /*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
  const justMod2Or3 = justNumbers.filter((item) => {
    if (item % 2 === 0 || item % 3 === 0) {
      return item;
    }
  });

  console.log("\nJust module of division by 2 or 3:", justMod2Or3);
  // ?

  /*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
  const operation = justMod2Or3.reduce((prev, cur) => {
    let firtStep = prev + 1;
    let secStep = firtStep * cur;
    return secStep;
  }, 0);

  console.log("\nOperation:", operation);
  // ?

  /*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
  const operation2 = justMod2Or3.reduceRight((prev, cur) => {
    let firtStep = prev + 1;
    let secStep = firtStep * cur;
    return secStep;
  }, 0);

  console.log("\nOperation 2:", operation2);
  // ?

  /*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
  const name = ["G", "u", "s", "t", "a", "v", "o"];

  const reducedName = name.reduce((prev, cur, index) => {
    let newName = prev + "P" + cur;
    return newName;
  }, "P");

  console.log('\nSeu nome na língua do "P":', reducedName);
  // ?

  /*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
  console.log("\nInversed Name:");
  // ?

  /*
Mostre no console o array `numberObjects`.
*/
  console.log("\nNumber objects");
  // ?

  /*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/
  console.log("\nExiste um { number: 2 } em numberObjects?");
  // ?

  /*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
  console.log(
    "\nE buscando a partir do último índice, o { number: 2 } existe?"
  );
  // ?

  /*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
  console.log(
    "\njustMod2Or3 é um array? Se for, a representação dele em String é:"
  );
  // ?
})();
