var nome = "";

nome = prompt("Qual é seu nome?")

alert("Ola " + nome + " espero que se divirta fazendo continhas no meu aplicativo/site XD")

function inicio(){
var escolha = parseInt(prompt("Selecione uma opção: \n\n 1.) Somar \n\n 2.) Substrair \n\n 3.) Dividir \n\n 4.) Multiplicar \n\n 5.) Sair"));

switch(escolha){
    case 1:
       Somar();
       break
    case 2:
        Subtrair();
        break
    case 3:
        Dividir();
        break
    case 4:
        Multiplicar();
        break
    case 5:
        Sair();
        break
    default:
        erro();
}
}

function Somar(){
var soma1 = parseInt(prompt("Coloque o primeiro valor da soma"));
var soma2 = parseInt(prompt("Coloque o segundo valor para a soma"));
var resultado = soma1 + soma2 ;

document.write("O valor da soma deu: " + resultado);
}


function Subtrair(){
var subtrair1 = parseInt(prompt("Coloque o primeiro valor para subtração"));
var subtrair2 = parseInt(prompt("Coloque o segundo valor para subtração"));
var valor = subtrair1 - subtrair2 ;

document.write("O valor da subtração deu " + valor);
}



function Dividir(){
var dividir1 = parseInt(prompt("Coloque o primeiro valor da divisão"));
var dividir2 = parseInt(prompt("Coloque o segundo valor da divisão"));
var resultado1 = dividir1 / dividir2 ;

document.write("O valor da divisão deu " + resultado1);
}


function Multiplicar () {
var multiplicar1 = parseInt(prompt("Digite o primeiro valor da multiplicação"));
var multiplicar2 = parseInt(prompt("Digite o segundo valor para a multiplicação"));
var valor2 = multiplicar1 * multiplicar2 ;

document.write("O valor da multiplicação é " + valor2);
}


    function Sair() {
        alert("Obrigado por ter se divertido um pouco com numeros em meu aplicativo :) ");
        var confirma = confirm('Você deseja sair?');
        if (confirma) {
            window.close();
        } else {
            inicio();
        
        }
    }
inicio();


