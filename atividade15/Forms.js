var parcela = 8190;
var usuario = Number(prompt("Em quantos vezes voce quer pagar o Drone?"));

for(var i = 1; i <= usuario; i++ ){
var resultado = parcela / usuario; 
document.write(i + "° Parcela = " + resultado.toFixed(2) + "<br/>");
}