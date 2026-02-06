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
entradaDados.question('Digite o nome do cliente: ', function(nomeCliente){
    let nome = nomeCliente

    // Validação do nome do cliente
    if(!isNaN(nome)){
        console.log('ERRO: Por favor, digite um nome para o cliente.')
        entradaDados.close()
    }else if (nome == ''){
        console.log('ERRO: Por favor, digite um nome para o cliente.')
        entradaDados.close()
    }

    entradaDados.question('Digite o nome do produto: ', function(nomeProduto){
        let produto = nomeProduto

        // Validação do nome do produto
        if(!isNaN(produto)){
            console.log('ERRO: Por favor, digite um nome para o produto.')
            entradaDados.close()
        }else if (produto == ''){
            console.log('ERRO: Por favor, digite um nome para o produto.')
            entradaDados.close()
        }

        entradaDados.question('Digite o valor do produto: ', function(valorProduto){
            let valor = valorProduto

            // Validação do valor do produto
            if(isNaN(valor)){
                console.log('ERRO: Por favor, digite um número para o valor do produto.')
                entradaDados.close()
            }else if (valor == ''){
                console.log('ERRO: Por favor, digite um número para o valor do produto.')
                entradaDados.close()
            }else if (valor <= 0){
                console.log('ERRO: Por favor, digite um valor maior que zero para o valor do produto.')
                entradaDados.close()
            }

            entradaDados.question('Digite a taxa de juros: ', function(taxaJuros){
                let taxa = taxaJuros

                // Validação da taxa de juros
                if(isNaN(taxa)){
                    console.log('ERRO: Por favor, digite um número para a taxa de juros.')
                    entradaDados.close()
                }else if (taxa == ''){
                    console.log('ERRO: Por favor, digite um número para a taxa de juros.')
                    entradaDados.close()
                }else if (taxa < 0 || taxa > 100){
                    console.log('ERRO: Por favor, digite um valor maior ou igual a zero e menor ou igual a 100 para a taxa de juros.')
                    entradaDados.close()
                }

                entradaDados.question('Em qual você irá calcular ? \n Digite 1: Meses \n Digite 2: Anos \n ' , function(mesesOuAnos){
                    let periodo = mesesOuAnos
                    
                    // O switch é uma estrutura de controle que permite executar diferentes blocos de código com base no valor de uma expressão.
                    switch(periodo){
                        case '1':
                            entradaDados.question('Digite a quantidade de meses: ', function(quantidadeMeses){
                                let meses = quantidadeMeses

                                if(isNaN(meses)){
                                    console.log('ERRO: Por favor, digite um número para a quantidade de meses.')
                                    entradaDados.close()
                                }else if (meses == ''){
                                    console.log('ERRO: Por favor, digite um número para a quantidade de meses.')
                                    entradaDados.close()
                                }else if (meses <= 0){
                                    console.log('ERRO: Por favor, digite um valor maior que zero para a quantidade de meses.')
                                    entradaDados.close()
                                }

                                //Math.pow é uma função matemática que eleva um número a uma potência.
                                let montanteFinal = valor * (Math.pow((1 + (taxa/100)), meses))
                            
                            console.log('')
                            console.log('********************** Tenis Landia ***********************')
                            console.log('')
                            console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.`)
                            console.log(`A compra do produto ${produto}, tem um valor de: R$${valor}.`)
                            console.log(`A sua compra será parcelada em ${meses} vezes e o Sr(a) pagará: R$${(montanteFinal/meses).toFixed(2)}.`)
                            console.log(`O acréscimo realizado ao valor de: R$${valor} será de R$${(montanteFinal - valor).toFixed(2)}.`)
                            console.log('')
                            console.log('Muito obrigado por escolher a Tenis Landia.')
                            console.log('*************************************************************')
                            
                            entradaDados.close()
                            })
                        break;

                        case '2':
                            entradaDados.question('Digite a quantidade de anos: ', function(quantidadeAnos){
                                let anos = quantidadeAnos

                                // Converte anos para meses
                                anos = anos * 12 

                                if(isNaN(anos)){
                                    console.log('ERRO: Por favor, digite um número para a quantidade de anos.')
                                    entradaDados.close()
                                }else if (anos == ''){
                                    console.log('ERRO: Por favor, digite um número para a quantidade de anos.')
                                    entradaDados.close()
                                }else if (anos <= 0){
                                    console.log('ERRO: Por favor, digite um valor maior que zero para a quantidade de anos.')
                                    entradaDados.close()
                                }

                                let montanteFinal = valor * (Math.pow((1 + (taxa/100)), anos))

                            console.log('')
                            console.log('********************** Tenis Landia ***********************')
                            console.log('')
                            console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.`)
                            console.log(`A compra do produto ${produto}, tem um valor de: R$${valor}.`)
                            console.log(`A sua compra será parcelada em ${anos} vezes e o Sr(a) pagará: R$${(montanteFinal/anos).toFixed(2)}.`)
                            console.log(`O acréscimo realizado ao valor de: R$${(valor)} será de R$${(montanteFinal - valor).toFixed(2)}.`)
                            console.log('')
                            console.log('Muito obrigado por escolher a Tenis Landia.')
                            console.log('*************************************************************')
                            
                            entradaDados.close()
                            })
                        break;

                        default:
                            console.log('ERRO: Opção inválida! Por favor, digite 1 para meses ou 2 para anos.')
                            entradaDados.close()
                        break;
                    }

                })
            })    
        })    
    })
})