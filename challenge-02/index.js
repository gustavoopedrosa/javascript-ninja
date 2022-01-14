// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(a, b) {
    return a + b
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma1 = sum(2, 4) + 5

// Qual o valor atualizado dessa variável
console.log(soma1) // 11

// Declare uma nova variável, sem valor.

var x

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addValue(value) {
    x += value
    return `O valor da variável agora é ${x}`
}

// Invoque a função criada acima.
console.log(addValue(10))

// Qual o retorno da função
//NaN

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function third(x, y, z){
    if(x === undefined || y === undefined || z === undefined){
        return console.log('Preencha todos os valores corretamente!')
    }
    return console.log((x * y * z) + 2)
}


// Invoque a função criada acima, passando só dois números como argumento.
third(2, 3)

// Qual o resultado da invocação acima
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
third(2, 3, 5)

// Qual o resultado da invocação acima
// 32

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function qualquer(x, y, z) {
    if (x === undefined) {
        return console.log(false)
    } else if (y === undefined) {
        return console.log(x)
    } else if (z === undefined) {
        return console.log(x + y)
    } else if (z !== undefined){
        return console.log((x + y) / z)
    } else {
        return console.log(null)
    }

}

qualquer(10, 15, 100)