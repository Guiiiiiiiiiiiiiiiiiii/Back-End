/* function IMC (peso,altura){
    var imc = Math.round(peso/(altura*altura));
    if(imc < 18.5){
        console.log("Abaixo do peso")
    }
    else if(imc > 30){
        console.log("Acima do peso")
    }
    
    console.log(imc);
}
IMC(70,1.83); */

/* function reverse(str){
    var sp=str.split(" ");
    var reserveStr= "";
    for(var i=0; i< sp.length; i++){
        var word = sp[i];


        for(var j= word.length - 1; j >= 0; j--){
            var letter = word[j];
            reserveStr+=letter;
        }
        reserveStr +=" ";
    }
    return console.log(reserveStr);
}
reverse("Hoje e Domingo"); */

/* function vogais(str){
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="0" || str[i]=="u"){
            count++;
        }
    }
    return count;
}
vogais("Ola mundo");
console.log(count); */

/* function letra(str, letter){
    var count = 0
    str = str.toLowerCase();
    for(var i=0; i<str.length; i++){
        if (str[i] == letter){
            count++;
        }
    }
    return count;
}
console.log(letra("Guilherme","e")); */

/* function work(hentrada, mentrada, sentrada,hsaida, msaida,ssaida){
    var entrada = hentrada*3600 + mentrada*60 + sentrada
    var saida = hsaida*3600 + msaida*60 + ssaida

    var segundostrabalho = entrada - saida

    var horasTra= Math.floor(segundostrabalho / 3600);
    var horasRes= segundostrabalho % 3600;

    var minTra = Math.floor(horasRes / 60);
    var segTra = horasRes % 60;

    console.log("Trabalhou" + horasTra + "h" + minTra + "m" + segTra + "s")
}
work(8,0,0,9,1,1) */

/* function retangulo(largura, altura){
    var linha ="";
    for(var i=0; i<largura; i++){
        linha+="*";
    }
    for(var j=0; j<altura; j++){
        console.log(linha);
    }
}
retangulo(20,10) */

function triangulo(altura){
    for(var i=0; i<altura)
}