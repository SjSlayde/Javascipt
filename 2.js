var a,b
a=prompt("entrer un nombre")//regarde si a est un nombre pair ou non
b = (a%2)
    if (b == 0)
    {
        alert("nombre pair")
    }
    else
    {
        alert("nombre impair")
    }

    var age,année//vous dis si vous etes majeur si vous etes un peut con
    année=prompt("entrer votre année de naissance")
    var myDate1 = new Date() //ptite upgrade 
    var annéeAC = 1900 + myDate1.getYear()
    age=annéeAC-année
    
        if(age>18) {
            alert("vous etes majeur")
        }
        else{
            alert("vous etes mineure")
        }
    
    var c,d,e,f//fait une operation(toujours pas le snip de csgo) avec l'operateur souhaiter 
    c= prompt("entrer le premier chiffre")
    d= prompt("entrer le deuxieme chiffre")
    e= prompt("entrer l'operateur(pas le snipe legendaire de csgo)")
        if(e== "+") {
            f= +c + +d
            alert(c+e+d+"="+f)    
        }
        else if(e== "-"){
            f= +c - +d  
            alert(c+e+d+"="+f)  
        }
        else if(e== "*"){
            f= +c * +d  
            alert(c+e+d+"="+f)  
        }
        else if(d==0||c==0){
            alert("pas cool le 0")
        }
        else if(e=="/"){
            f= +c / +d
            alert(c+e+d+"="+f)   
        }
        else{
            alert("j'avais dis le snipe")
        }