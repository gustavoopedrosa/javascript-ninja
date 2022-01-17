/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

const isTruthy = function(param){
    return param ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

// console.log(isTruthy(0))
// console.log(isTruthy(undefined))
// console.log(isTruthy(null))
// console.log(isTruthy(-0))
// console.log(isTruthy(NaN))
// console.log(isTruthy(''))
// console.log(isTruthy(""))
// console.log(isTruthy(false))
// Todos retornos falsos

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

// console.log(isTruthy(1))
// console.log(isTruthy('gustavo'))
// console.log(isTruthy(10))
// console.log(isTruthy(500))
// console.log(isTruthy("pedrosa"))
// console.log(isTruthy({}))
// console.log(isTruthy([]))
// console.log(isTruthy(() => {
//     return
// }))
// console.log(isTruthy([ 1, 2]))
// console.log(isTruthy({nome:'gustavo'}))



/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

const carro = {
    marca: 'BMW',
    modelo: '320i',
    placa: 'AAA00A00',
    ano: 2020,
    cor: 'black',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(cor) {
    carro.cor = cor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function() {
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function() {
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function() {
    return carro.marca
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function() {
    return `Esse carro é um ${carro.marca} ${carro.modelo}`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.pessoas = 0

carro.addPessoas = function(num) {
    const assentosDisponiveis = carro.assentos - carro.pessoas
    const pessoas = (assentosDisponiveis) === 1 ? 'pessoa' : 'pessoas'

    if(carro.pessoas === carro.assentos){
        return 'O carro já está lotado!'

    } else if(carro.pessoas + num > carro.assentos) {
        return `Só cabem mais ${assentosDisponiveis} ${pessoas}!`

    } else {
        carro.pessoas += num
        
        return `Já temos ${carro.pessoas} pessoas no carro!`
    }
    
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

//console.log(carro.obterCor()) // black

// Mude a cor do carro para vermelho.

//carro.mudarCor('white')

// E agora, qual a cor do carro?

//console.log(carro.obterCor()) // white

// Mude a cor do carro para verde musgo.

//carro.mudarCor('verde-musgo')

// E agora, qual a cor do carro?

//console.log(carro.obterCor()) // verde-musgo

// Qual a marca e modelo do carro?

//console.log(carro.obterMarcaModelo()) // 'Esse carro é um BMW 320i'

// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(1))

// Adicione mais 4 pessoas no carro.

console.log(carro.addPessoas(3))

// Faça o carro encher.

console.log(carro.addPessoas(3))

// Tire 4 pessoas do carro.

carro.pessoas -= 4

// Adicione 10 pessoas no carro.

console.log(carro.addPessoas(10))

// Quantas pessoas temos no carro?

console.log(carro.pessoas)