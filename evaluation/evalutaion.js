exo1 = document.getElementById("age")
exo1.addEventListener("click",() => {
var age = 0 , total=0
var compteur = 0
var vieux = 0 , moyen=0, jeune =0 
document.getElementById("text").value ="saisie :"
while(age!==100){//double securité 
    age =prompt("veuillez selectionner l'age a rajouter")
    document.getElementById("text").value += age+" ,"
    total= +total + +age//additionne
    compteur++//un compteur quoi
    if(age>99){//compte le centenaire est s'arrete 
        vieux++;alert("GG vous avez finie la vie");break
    }
    if(age<20){//compte les jeune
        jeune++
    }
    if (age>19 && age<41){//ça compte les moyen mais par-contre a partir de 35 vous etes vieux pour moi
        moyen++
    }
    if(age>40){//ça compte les vieux ça commence a pique 
        vieux++
    }
}
document.getElementById("text").value +="\nle nombre de personne agé est : "+vieux
document.getElementById("text").value +="\nle nombre de personne dans la moyenne d'age est : "+moyen
document.getElementById("text").value +="\nle nombre de personne jeune est :" +jeune
document.getElementById("text").value +="\nle nombre d'age taper est : "+compteur
document.getElementById("text").value +="\nnombre d' age additionner taper est : "+total
document.getElementById("text").value +="\nla moyenne des age est de :"+(total / compteur)//ÇA DONNE TOUTE LES INFOS  
})

exo2 = document.getElementById("multication")
exo2.addEventListener("click",() => {
nombre = prompt("saisissez la table voulue")
resultat = 0
document.getElementById("text").value ='table de '+nombre
for(let i=0;i<11;i++){
resultat= i * nombre
document.getElementById("text").value +='\n'+i+"x"+nombre+"="+resultat
}})

exo3 = document.getElementById("prenom")
exo3.addEventListener("click",() => {
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom=prompt("veuillez selectionner le prenom souhaiter");
supp = tab.indexOf(prenom)//donne l'adresse dans le tableux de l'element voulu
if (supp==-1){
    supp = 'erreur'
    document.getElementById("text").value ="\n"+supp
    return false
}
if(supp>=0){
    tab.splice(supp,1)//suprimer l'element choisie
    tab.push("supp")
}
document.getElementById("text").value =supp
document.getElementById("text").value +='\n'+tab
})

exo4 = document.getElementById("pourcentage")
exo4.addEventListener("click",() => {//debut de la fonctionne
var PU,QTECOM,PAP = 0,REM=0,PORT,TOT = 0
PU=prompt("prix unitaire de l'article")
QTECOM=prompt("nombre d'article")
TOT=PU * QTECOM
PAP=TOT
if(TOT>99 && TOT<201){
    REM=((+TOT / 100)*5);//calculre les 5%
    REM = Math.round(REM * 100)/100;//arrondis le nombre au deuxieme chiffre aprés la virgule.
    PAP=TOT - REM
}
    else if(TOT>200){
        REM=((+TOT / 100)*10)//calculre les 10%
        REM = Math.round(REM * 100)/100//arrondis encore on evite les probleme
        PAP=+TOT - +REM}
    if(PAP<301){
            PORT=6
            PAP=+PAP + +PORT
        }
        else if(PAP>300 && PAP<500){
            PORT=((+PAP / 100)*2)//ajouter les 2% de frais de port a partir de 300 
            PORT=Math.round(PORT * 100)/100//arrondis encore on evite les probleme
            PAP=+PAP + +PORT}
        else if(PAP>499){
            PORT="offert"//l'offre de l'année fdp(frais de port!!!) offert 
        }
        document.getElementById("text").value ="prix sans frais de port et remise appliquer :"+TOT
        document.getElementById("text").value +="\nremise appliquer :"+REM
        document.getElementById("text").value +="\nfrais de port :"+PORT
        document.getElementById("text").value +="\nle prix a payer est de :"+PAP
})
//exercice 5 dans contact.js et .html