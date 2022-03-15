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

function vogais(str){
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="0" || str[i]=="u"){
            count++;
        }
    }
    return count;
}
vogais("Ola mundo");
console.log(count);