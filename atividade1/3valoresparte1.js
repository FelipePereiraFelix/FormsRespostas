var num1 = parseInt(prompt("Informe o primeiro valor"));
var num2 = parseInt(prompt("Informe mais um valor"));
var num3 = parseInt(prompt("Só mais umzinho"));

if(num1 > num2 && num1 > num3){
document.write("O primeiro valor informado é o maior ");
}
if(num2 > num1 && num2 > num3){
document.write("O segundo valor informado é o maior ");
}
else if(num3 > num1 && num3 > num2){
document.write("O ultimo valor informado é o maior");
}
