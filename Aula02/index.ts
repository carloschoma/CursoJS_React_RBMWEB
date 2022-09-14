const dados = [
    {
      id: 1,
      modelo: "blusa do naruto",
      marca: "lacosta",
      categoria: "blusa",
    },
    {
      id: 2,
      modelo: "bermuda do naruto",
      marca: "lacosta",
      categoria: "bermuda",
    },
    {
      id: 3,
      modelo: "bandana do naruto",
      marca: "lacosta",
      categoria: "acessorios",
    },
  ];

/*Faça uma função que aceite um parametro, sendo esse o nome de uma categoria, e essa funcao deve retornar um novo array 
com itens apenas que tem a categoria passada como parametro.*/
function pesquisaCategoria(categoria: string){
    return dados.filter(el => el.categoria === categoria);
}

//Faça uma função que retorne um array, com arrays dentro (matriz) que contenham a sequencia de numeros de 1 a 27, separados por 3 em cada array interno. Exemplo: [[1,2,3],[4,5,6],[7,8,9]], até 27.
function retornaMatriz3em3(){
    let matriz = [];
    let j = 0;
    for(let i = 1; i<=27; i=i+3){
        let aux = [i,i+1,i+2];
        matriz[j] = aux;
        j++;
    }
    return matriz;
}

//Faça uma função que retorna o array que é resultado do exercício acima, só que ao invés de grupos de 3, vai retornar em cada array interno, a soma dos itens. Exemplo: [[6],[15]...]
function retornaMatriz3em3Somada(param : number[][]){
    let matriz = [];
    for(let i=0; i<param.length; i++){
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += param[i][j];
        }

        matriz[i] = sum;
    }

    return matriz;
}

console.log("Pesquisando Categoria bermuda: ");
console.log(pesquisaCategoria('bermuda'));

console.log("Montando Array 3x3: ");
console.log(retornaMatriz3em3());

console.log("Somaando Array 3x3: ");
let matriz = retornaMatriz3em3();
console.log(retornaMatriz3em3Somada(matriz));