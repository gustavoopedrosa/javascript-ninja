/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 
const myArray = [1, 'gustavo', true, 5, 10]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(array) {
    return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(returnArray([1, 2, 5, 6, 7])[1]) // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function twoParams(array, i) {
    return array[i]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

const myArray2 = [1, 'gustavo', true, {}, function(){}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(twoParams(myArray2, 0)) // 1
console.log(twoParams(myArray2, 1)) // 'gustavo'
console.log(twoParams(myArray2, 2)) // true
console.log(twoParams(myArray2, 3)) // {}
console.log(twoParams(myArray2, 4)) // [Function (anonymous)]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function bookFinder(name) {
    const obj = {
        livro1: {
            quantidadePaginas: 100,
            autor: 'Joãozinho da Silva',
            editora: 'Editora Records'
        },
        livro2: {
            quantidadePaginas: 150,
            autor: 'Mariazinha Silva',
            editora: 'Records Editora'
        },
        livro3: {
            quantidadePaginas: 200,
            autor: 'Bianca da Silva',
            editora: 'Bianca Records'
        }
    }

    if(obj[name]){
        return [
            obj[name],
            `O livro ${name} tem ${obj[name].quantidadePaginas} páginas!`,
            `O autor do livro ${name} é ${obj[name].autor}.`,
            `O livro ${name} foi publicado pela editora ${obj[name].editora}.`
        ]
    }

    return obj
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(bookFinder())

// {
//     livro1: {
//       quantidadePaginas: 100,
//       autor: 'Joãozinho da Silva',
//       editora: 'Editora Records'
//     },
//     livro2: {
//       quantidadePaginas: 150,
//       autor: 'Mariazinha Silva',
//       editora: 'Records Editora'
//     },
//     livro3: {
//       quantidadePaginas: 200,
//       autor: 'Bianca da Silva',
//       editora: 'Bianca Records'
//     }
//   }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(bookFinder('livro2')) 

// [
//     {
//       quantidadePaginas: 150,
//       autor: 'Mariazinha Silva',
//       editora: 'Records Editora'
//     },
//     'O livro livro2 tem 150 páginas!'
//   ]

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(bookFinder('livro3')) 

// [
//     {
//       quantidadePaginas: 200,
//       autor: 'Bianca da Silva',
//       editora: 'Bianca Records'
//     },
//     'O livro livro3 tem 200 páginas!',
//     'O autor do livro livro3 é Bianca da Silva.'
// ]

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(bookFinder('livro1')) 

/*
[
  {
    quantidadePaginas: 100,
    autor: 'Joãozinho da Silva',
    editora: 'Editora Records'
  },
  'O livro livro1 tem 100 páginas!',
  'O autor do livro livro1 é Joãozinho da Silva.',
  'O livro livro1 foi publicado pela editora Editora Records.'
]
*/