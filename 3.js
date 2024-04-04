B1=document.getElementById('B1')//armée de bouton
B2=document.getElementById('B2')
B3=document.getElementById('B3')
B4=document.getElementById('B4')
B5=document.getElementById('B5')
B6=document.getElementById('B6')
B7=document.getElementById('B7')
B8=document.getElementById('B8')
B9=document.getElementById('B9')

B1.addEventListener('click',function fruits(){
var fruits,myTableau = []// demande la taille du tableau et laisse a l'utilisateur la saisie des donnée
fruits=prompt("saisie du nombre de fruit souhaiter")
for (var i = 0; i < fruits; i++) 
{
    myTableau[i]= prompt("fruits")
}
console.log(myTableau)
console.log(myTableau.length)
console.log("Le tableau contient "+i+ "éléments");//doublon
})

B2.addEventListener('click',function calculettev2(){
var a,b //multiplie le nombre souhaiter jusqu'a dix 
a=prompt("saisie")
for  (var i = 0 ;i < 10; i++)
{     b= +a * +i
     console.log(i+"*"+a+"="+b);
}
})

B3.addEventListener('click',function prenom(){
var myTableau = [];//stocke les prenom saisie par l'utilisatuer dans un tableau et s'arrete si la est case vide 
for(var i = 0 ;i<100; i++)
{
   myTableau[i]= prompt("prenom")
   if (myTableau[i]== "" )
   {
    break
   }
   
}  
for (var i = 0; i < myTableau.length-1; i++) 
{console.log("Prenom : "+myTableau[i]);}
})

B4.addEventListener('click',function inferieur(){
var N// affiche les nombre inferieur jusqu'a zero sinon aprés c'est le bazarre
N=prompt("saisie du nombre")
for(var i = 0 ;N!==0;i++)
{
    N= +N - 1
    console.log("nombre entier inferieur a "+N)
}
})
//-----------------------------------------------------------------------------------
B5.addEventListener('click',function encorecalculette(){
var n = 0 // aditionne les nombre saisie par l'utilisateur et en fait la moyenne 
var myTableau = []; 
for(var i = 0 ;i<100; i++)
{
   myTableau[i]= prompt("nombre")
   n= +n + +myTableau[i]
   if (myTableau[i]== "" )
   {
    break
   }
   console.log(myTableau[i])
   console.log(n)
}  
console.log("somme des nombres entier :"+n)
n= +n / +i
console.log("moyenne des nombre entier :"+n)
})

B6.addEventListener('click',function parsin(){
var n = 0//pareil mais avec parseint
var nik = 0
for(var i = 0 ;i<100; i++)
{
    nik = prompt("d")
    if (nik=="") 
    {
     break
    }
    n= n + parseInt(nik)
} 
console.log(n)
console.log(n/i)
})
//----------------------------------------------------------------------
B7.addEventListener('click',function calculetteV2000(){
var N,X,Y//multiplie X jusqu'a N
N=prompt("saisie")
X=prompt("deuxieme saisie")
for  (var i = 0 ;i <= N; i++)
{   Y= +i * +X
    console.log(i+"*"+X+"="+Y);
}
})
/*var N,a,g //soluce trouver sur un foum__________________________________________________________________________________________________
N=prompt("saisie")
let nbVoyelles = 0;
let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
for (let lettre of N) {
    console.log(lettre)
    if (voyelles.includes(lettre.toLowerCase())) {
        nbVoyelles ++;
    }
}
console.log(nbVoyelles)*/

B8.addEventListener('click',function voyellecasser(){
var N, // ma version a reparer elle est casser avec les commande fournis avec l'exo compte les voyelle super utile non?
N=prompt("saisie")
N=N.toLowerCase();
var nbVoyelles = 0;
var voyelles = ['a','e','i','o','u','y'];
for (let i =0; i<N.length;i++){
    // if(i>0){
    //     alert("c'est casser aller sur la page 4 a la fin merci cette boucle s'autodetruira dans 3,2,1 Boum\"c'est faux je sais pas encore faire ça\"");break
    // }
    check=N.substring(i,i+1)
    console.log(N.substring(i,i+1))
    console.log(check.indexOf(voyelles))
    if(N.indexOf(voyelles)!==-1){
        nbVoyelles++
    }
}
console.log(nbVoyelles)
})
//-----------------------------------------------
// function strtok(str1, str2,n){// 150 version de test de split 
// t = "robert dupont amiens 80000" 
// k=prompt("selectionner l'infos que vous voulez")
// n = t.split(' ');
// console.log(n[k-1]);
// // donne un mot 

// /*m = t.split('');
// console.log(m[7]);
// // donne un caractere*/
// }
// strtok()
// function strtok(str1, str2,n){
//     str2 = ";"
//     str1 = 'robert '+str2+'dupont '+str2+'amiens '+str2+'80000' 
//     n = str1.split(' ');
//     //console.log(n[k-1]);
//     // donne un mot
//     return strtok (str1, str2, n) 
//     }
//     k=prompt("selectionner l'infos que vous voulez")
//     console.log(strtok ())
//---------------------------------
// var  n = 0
// function strtok(str1, str2,n){
//     str1 = "robert ;dupont ;amiens ;80000"
//     str2 = ';'
//     n=prompt("saise")
//     k = str1.split(str2);
//     console.log(k[n]);
//     return str1
//     }
//  str1 = strtok
//  str2 = strtok  
// strtok (str1, str2, n) 

B9.addEventListener('click',function jesaispu(){
var nombre = new Array ()
var total = 0
for (var i= 0 ;i<100;i++){
nombre[i]=window.prompt("")
if (nombre[i]==""){
    nombre.pop()
    break
}
total=total + parseInt(nombre[i])
}
console.log(nombre.length)
console.log(total)
console.log(total/nombre.length)
console.log(nombre)
})

// function verif2(){ //controle un formulaire premiere version du formulaire
//     coordonnee = document.getElementById("société").value
//     filtre = new RegExp("^[a-z]+$")
//     filtreCP = new RegExp("^([0-9]{5})+$")
//     filtreEmail = new RegExp("^[_a-z0-9.-]+@[_a-z0-9.-]+.[a-z]{2,4}$")
//     filtre4 = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$")
//     resultat = filtre.test(coordonnee);
//     if(coordonnee == false){
//         alert("Veuillez rentrer un nom de société.")
//     }        
//     coordonnee = document.getElementById("personne").value
//     resultat = filtre.test(coordonnee);
//     if(resultat == false){
//         alert("Veuillez mettre une personne a conctater.")
//     }   
//     coordonnee = document.getElementById("Adresse").value
//     resultat = filtre.test(coordonnee);
//     if(coordonnee == false){
//         alert("Veuillez mettre une adresse.")
//     } 
//     coordonnee = document.getElementById("CP").value
//     resultat2 = filtreCP.test(coordonnee)
//     if(resultat2 == false){
//         alert("Veuillez mettre un code postal a cinq chiffre.")
//     } 
//     coordonnee = document.getElementById("Ville").value
//     resultat = filtre.test(coordonnee);
//     if(resultat == false){
//         alert("Veuillez mettre une Ville.")
//     } 
//     coordonnee = document.getElementById("Email").value// n'autorise pas les , dans le nom de l'email regarder les caractere autoriser pour les adresse email 
//     resultat3 = filtreEmail.test(coordonnee);
//     if(resultat3 == false){
//         alert("Veuillez mettre une adresse email.")
//     }
//     coordonnee = document.getElementById("tel").value
//     resultat4 = filtre4.test(coordonnee);
//     console.log(coordonnee)
//     if(resultat4 == false){
//         alert("Veuillez mettre un numéros de téléphone valide.")
//     }
//     coordonnee = document.getElementById("select").value
//     if(coordonnee == ""){
//         alert("Veuillez choisir un environnement technique du projet.")
//     }
//     coordonnee = document.getElementById("textarea").value
//     if(coordonnee == ""){
//         alert("Veuillez decrire votre projet.")
//     }
// }

// const choixElement = document.getElementById('select');//fait apparaitre une jolie zone de texte si la personjne utilise le menu deroulant
// const textareaElement = document.getElementById('textarea');

// choixElement.addEventListener('change', () => {
//   const choix = choixElement.value;
//   if (choix !== "choix0") {
//     textareaElement.style.display = 'block';
//   } else {
//     textareaElement.style.display = 'none';
//   }
// });