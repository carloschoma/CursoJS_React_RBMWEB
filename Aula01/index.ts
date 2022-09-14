
// 1- Uma função que recebe dois parametros, e retorna a soma entre eles.
function soma(num1: number, num2: number){
    console.log("A soma de ",num1,"+",num2," é: ", num1+num2);
}

// 2- Uma função que recebe 5 números, e retorna a média deles.
function media(numeros: number[]){
    let soma = 0;
    numeros.forEach(element => {
        soma += element;
    });
    let media  =soma/(numeros.length);

    console.log("A Média dos 5 números é ",media);

}

// 3- Uma função que calcula o IMC (índice de massa corporal) (pesquisem a formula no google, "formula imc")
function imc(peso: number, altura: number){
    console.log("O IMC é: ", peso/(altura**2));
}


//utilização
soma(10,50);

const numeros = [10,30,45,34,34];
media(numeros);

const peso = 130;
const altura = 1.85;
imc(peso, altura);
