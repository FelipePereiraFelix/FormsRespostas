var valor = Number(prompt("Informe o valor"));
var marge = Number(prompt("Informe a Margem de Lucro"));
var resultado ;

resultado = valor + (valor *( marge / 100));
document.write("O valor do produto será " + resultado);