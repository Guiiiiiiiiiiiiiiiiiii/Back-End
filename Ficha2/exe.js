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

/* function triangulo(altura){
    var linha="*"
    for(var i=0; i<altura;i++){
        console.log(linha)
        linha+="*"
    }
}
triangulo(10) */

/* function box(width,heigth){

    for(let i=0; i<heigth;i++){
        var line =""
        for(let j=0; j<width;j++){
            if(i==0 || i==heigth-1){
                line+="*";
            }
            else{
                if(j==0 || j==width-1){
                    line+="*"
                }
                else{
                    line+=" "
                }
            }
        }
        console.log(line)
    }
}
box(10,10) */




var students = [];

for(let i=0; i<10;i++){
    var student = {
        number: Math.ceil(Math.random()*1000), 
        grade: Math.random()*20
    };
    student.push(student)
}

function listAll(students){
    for(let i=0; i< students.length;i++){
        var student = students[i];
        console.log("Number:" + student.number
         + ", Grade" + student.grade)
    }
}
function bestGrade(students){
    var biggestGrade = students[0].grade;
    for(var i=0; i<students.length; i++){
        if(biggestGrade > students[i].grade){
            biggestGrade = students[i].grade
        }
    }
    return biggestGrade
}
function worstGrade(students){
    var lowestGrade = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (lowestGrade > students[i].grade){
            lowestGrade = students[i].grade;
        }
    }
    return lowestGrade
}
function averageGrade(students){
    var sum = 0;
    for(var i=0; i<students.length; i++){
        sum += students[i].grade;
    }
    return sum/students.legth()
}
function closeAverage(students){
    var avg= averageGrade(students);
    var resultado= Math.abs(students[0].grade - avg);
    for(var i=0;i<students.length; i++){
        if(students[i].grade - avg < resultado){
            resultado = students[i].grade - avg
        }
    }
    return resultado;
}

function negativesGrade(students){
    var sum= 0;
    for (var i=0; i<students.length; i++){
        if (students[i].grade < 9.5){
            sum ++;
        }
    }
    return sum
}
function positiveGrade(students){
    var sum= 0;
    for (var i=0; i<students.length; i++){
        if (students[i].grade >= 9.5){
            sum ++;
        }
    }
    return sum
}

function studentsStats(students, option){
    switch (option) {
        case 1:
            listAll(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students);
            break;
        case 4:
            averageGrade(students);
            break;
        case 5: 
            negativesGrade(students);
            break;
        case 6:
            positiveGrade(students);
        default:
            console.log("Invalid option");
            break;
        
    }
}
studentsStats(students,1);