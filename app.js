/*******************************************************************************************************************************************
* Objetivo: Desenvolver uma aplicação para a calcular montante final com juros compostos
* Data: 04/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

// Import da biblioteca para entrada de dados
const readline = require('readline');

// Cria um objeto para manipulação do readline
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Em qual você irá calcular ? \n Digite 1: Meses \n Digite 2: Anos \n ' , function(mesesOuAnos){
    let periodo = mesesOuAnos

    switch(periodo){
        case '1':
            entradaDados.question('Digite a quantidade de meses: ', function(quantidadeMeses){
                let meses = quantidadeMeses


            })
        break;

        case '2':
            entradaDados.question('Digite a quantidade de anos: ', function(quantidadeAnos){
                let anos = quantidadeAnos
                

            })
        break;

        default:
            console.log('Opção inválida! Por favor, digite 1 para meses ou 2 para anos.')
            entradaDados.close()
    }

})
