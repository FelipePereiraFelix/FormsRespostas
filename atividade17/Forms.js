function calcularIdadeGato(nome, idade){

    var expectativa;

    if(idade == 1){
       expectativa = 15;
       document.write(nome + "tem" + expectativa + "Anos em anos de humanos!" + "<br/>");
    }else if(idade == 2){
       expectativa = 25
       document.write(nome + "tem" + expectativa + "Anos em anos de humanos " + "<br/>");
    }else if(idade = 3){
       expectativa = 25;
    for(var a = 3; i < idade; i++){
       expectativa = expectativa + 4;
    }
    document.write(nome + "tem" + expectativa + "Anos em anos de humanos!Um(a) com 3 anos de vida possui aproximadamente 25 anos, depois disso é necessário somar 4 a cada ano que vier seguidamente" + "<br/>");

    }
}
calcularIdadeGato(1,"Mila");
