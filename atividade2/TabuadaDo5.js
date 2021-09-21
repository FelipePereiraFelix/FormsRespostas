var texto;
var tabuada = prompt("Me informe um valor de 1 a 10");

switch(tabuada){
  case "0":
    texto = "Seu valor é 0";
    break;
  case "1":
    texto = "Seu valor é 5";
    break;
  case "2":
    texto = "Seu valor é 10";
    break;
  case "3":
    texto = "Seu valor é 15";
    break;
  case "4":
    texto = "Seu valor é 20";
    break;
  case "5":
    texto = "Seu valor é 25";
    break;
  case "6":
    texto = "Seu valor é 30";
    break;
  case "7":
    texto = "Seu valor é 35";
    break;
  case "8":
    texto = "Seu valor é 40";
    break;
  case "9":
    texto = "Seu valor é 45";
    break;
  case "10":
    texto = "Seu valor é 50";
    break;
    default:
    texto = "Apenas até o 10, menor que 0 ou maior que 10 não teremos pra hoje campeão/campeã";
}
document.write(texto);
