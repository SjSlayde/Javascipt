const exobox = document.getElementById('exobox');
exobox.style.display = 'none';  //disparait

var element = document.getElementById("button1"); // exercice patrick
element.addEventListener("click", function textBox() 
{
    exobox.style.display = 'block';
    text = document.getElementById("textBox0").value
   exobox.value="Salutation "+text
})
//------------------------------
const random = Math.floor(Math.random() * 100)+1  // exercice nombre aleatoire 
console.log(random)
function verif() 
{
    text = document.getElementById("textBox1").value
    exobox.style.display = 'block';
    filtreNombre = new RegExp("^[0-9]+$");
    resultat = filtreNombre.test(text);
    console.log(resultat);
    if(resultat == false){
        exobox.value="veuillez rentrer que des chiffres/nombres"
    }
    else if( text < random && resultat == true){
        exobox.value="trop petit"
    }   
    else if( text >  random && resultat == true){
        exobox.value="trop grand"
    }   
    else if( text = random && resultat == true){
        exobox.value="GG"
    }   
    else
    alert("erreur")
}
//----------------------------------
function verif2() {
  // verifie le formulaire v2 avec boucle
  filtre = new RegExp("^[A-Za-z]+$");
  filtre2 = new RegExp("^([0-9]{5})+$");
  filtre3 = new RegExp("^[_A-Za-z0-9.-]+@[_a-z0-9.-]+.[a-z]{2,4}$");
  filtre4 = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$");
  envoyer = document.getElementById("submit")
  check = true
  for (let i = 0; i < 9; i++) {
      coordonnee = document.getElementById(i).value;
      resultat = filtre.test(coordonnee);
      if (coordonnee == false && i == 0) {
          //nom de société = 1
          alert("Veuillez rentrer un nom de société.");return false;
        }
        if (resultat == false && i == 1) {
            alert("Veuillez mettre une personne a conctater.");return false;
        }
        if (coordonnee == false && i == 2) {
            alert("Veuillez mettre une adresse.");return false;
        }
        if (resultat == false && i == 3) {
            alert("Veuillez mettre une Ville.");return false;
        }
        if(coordonnee!==""||i<6){
            document.getElementById("rouge"+i).src ="img/png-clipart.png"
          }
        if (coordonnee == "choix" && i == 4) {
            alert("Veuillez choisir un environnement technique du projet.");return false;
        }
        resultat4 = filtre4.test(coordonnee);
        if (resultat4 == false && i == 5) {
            alert("Veuillez mettre un numéros de téléphone valide.");return false;
        }
    resultat = filtre.test(coordonnee)
    if (coordonnee == "" && i == 8) {
      alert("Veuillez decrire votre projet.");return false;
    //   document.getElementById("test").innerHTML;break;
    }
    resultat2 = filtre2.test(coordonnee);
    if (resultat2 == false && i == 6) {
      alert("Veuillez mettre un code postal a cinq chiffre.");return false;
    }
    resultat3 = filtre3.test(coordonnee); // n'autorise pas les , dans le nom de l'email regarder les caractere autoriser pour les adresse email
    if (resultat3 == false && i == 7) {
        alert("Veuillez mettre une adresse email.");return false;
    }
  }
}

const choixElement = document.getElementById('4');//deroulante
const p = document.getElementById("choix")//choissisez
choixElement.addEventListener('change', () => {//
    p.remove()
})

    bouton2 = document.getElementById("button2")
    bouton2.addEventListener('click', function (){
    mot = document.getElementById("textBox2").value
    var compteur=0 ,test  
    if(mot == ""){
            alert('veuillez saisir un mot');return false
        }
        exobox.style.display = 'block';
        for(let i = 0;i<mot.length;i++){
            test = mot.substring(i,i+1)
            console.log(mot.substring(i,i+1))
            if (test.indexOf("e")!==-1||test.indexOf("a")!==-1||test.indexOf("o")!==-1||test.indexOf("y")!==-1||test.indexOf("i")!==-1||test.indexOf("u")!==-1){
                compteur++
                console.log(compteur)
            }
        }
        exobox.value="le nombre de voyelle que contient "+mot+" :"+compteur
    })
