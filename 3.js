var fruits,myTableau = []// demande la taille du tableau et laisse a l'utilisateur la saisie des donnée
fruits=prompt("saisie du nombre de fruit souhaiter")
for (var i = 0; i < fruits; i++) 
{
    myTableau[i]= prompt("fruits")
}
console.log(myTableau)
console.log(myTableau.length)
console.log("Le tableau contient "+i+ "éléments");//doublon

var a,b //multiplie le nombre souhaiter jusqu'a dix 
a=prompt("saisie")
for  (var i = 0 ;i < 10; i++)
{     b= +a * +i
     console.log(i+"*"+a+"="+b);
}

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

var N// affiche les nombre inferieur jusqu'a zero sinon aprés c'est le bazarre
N=prompt("saisie du nombre")
for(var i = 0 ;N!==0;i++)
{
    N= +N - 1
    console.log("nombre entier inferieur a "+N)
}

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
   
}  
console.log("somme des nombres entier :"+n)
n= +n / +i
console.log("moyenne des nombre entier :"+n)

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

var N,X,Y//multiplie X jusqu'a N
N=prompt("saisie")
X=prompt("deuxieme saisie")
for  (var i = 0 ;i <= N; i++)
{   Y= +i * +X
    console.log(i+"*"+X+"="+Y);
}
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

var N, // ma version a reparer elle est casser avec les commande fournis avec l'exo compte les voyelle super utile non?
N=prompt("saisie")
let nbVoyelles = 0;
let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
for (let i =0; i<N.length;i++) {
    N.substring(i,i+1)
    console.log(N.substring(i,i+1))
    voyelles.indexOf(nbVoyelles)
}
console.log(nbVoyelles)
//-----------------------------------------------
function strtok(str1, str2,n){// 150 version de test de split 
t = "robert dupont amiens 80000" 
k=prompt("selectionner l'infos que vous voulez")
n = t.split(' ');
console.log(n[k-1]);
// donne un mot 

/*m = t.split('');
console.log(m[7]);
// donne un caractere*/
}
strtok()
function strtok(str1, str2,n){
    str2 = ";"
    str1 = 'robert '+str2+'dupont '+str2+'amiens '+str2+'80000' 
    n = str1.split(' ');
    //console.log(n[k-1]);
    // donne un mot
    return strtok (str1, str2, n) 
    }
    k=prompt("selectionner l'infos que vous voulez")
    console.log(strtok ())
//---------------------------------
var  n = 0
function strtok(str1, str2,n){
    str1 = "robert ;dupont ;amiens ;80000"
    str2 = ';'
    n=prompt("saise")
    k = str1.split(str2);
    console.log(k[n]);
    return str1
    }
 str1 = strtok
 str2 = strtok  
strtok (str1, str2, n) 

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