/*Exercício 1*/
let nome_do_carro = "Fusca";
alert(nome_do_carro);

/*Exercício 2*/
let nome = prompt("Digite o seu nome:");
alert("Olá " + nome);

/*Exercício 3*/
let nome2 = prompt("Digite o seu nome:");
let idade = prompt("Digite o sua idade:");
alert(`Olá ${nome2}, sua idade é ${idade}`);

/*Exercicio 4*/

let escolha = parseInt(prompt("Área de figuras planas: 1)Retângulo 2)Quadrado 3)Losango 4)Trapézio \n 5)Paralelograma 6)Triângulo 7)Círculo"));

switch(escolha){
    case 1:
        area1();
        break;

    case 2:
        area3();
        break;

    case 3:
        area4();
        break;

    case 4:
        area5();
        break;

    case 5:
        area1();
        break;

    case 6:
        area2();
        break;

    case 7:
        area6();
        break;
    
    default:
        alert("Digite um número entre 1 e 7");
}

function area1(){
    let base = prompt("Digite a base: ");
    let altura = prompt("Digite a altura: ");
    let resultado = alert(`A área é ${base * altura}`);
}

function area2(){
    let base = prompt("Digite a base: ");
    let altura = prompt("Digite a altura: ");
    let resultado = alert(`A área é ${base * altura / 2}`);
}

function area3(){
    let lado = prompt("Digite o lado: ");
    let lado2 = prompt("Digite o lado: ");
    let lado_result = alert(`A área é ${lado * lado2}`);
}

function area4(){
    let diag_maior = prompt("Digite a diagonal maior: ");
    let diag_menor = prompt("Digite a diagonal menor: ");
    let resultado = alert(`A área é ${diag_maior * diag_menor / 2}`);
}

function area5(){
    let base_maior = prompt("Digite a base maior: ");
    let base_menor = prompt("Digite a base menor: ");
    let altura = prompt("Digite a altura: ");
    let resultado = alert(`A área é ${base_maior * base_menor * altura / 2}`);
}

function area6(){
    let pi = prompt("Digite o valor de Pi: ");
    let raio = prompt("Digite o valor do Raio ao quadrado: ");
    let resultado = alert(`A área é ${pi * raio}`);
}
