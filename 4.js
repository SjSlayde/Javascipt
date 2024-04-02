var element = document.getElementById("button1"); // exercice patrick
element.addEventListener("click", function textBox() 
{
    text = document.getElementById("textBox0").value
   alert("Salutation "+text);
})
//------------------------------
const random = Math.floor(Math.random() * 100)+1  // exercice nombre aleatoire 
console.log(random)
function verif() 
{
    text = document.getElementById("textBox1").value
    filtreNombre = new RegExp("^[0-9]+$");
    resultat = filtreNombre.test(text);
    console.log(resultat);
    if(resultat == false){
        alert("veuillez rentrer que des chiffres/nombres")
    }
    else if( text < random && resultat == true){
        alert("trop petit")
    }   
    else if( text >  random && resultat == true){
        alert("trop grand")
    }   
    else if( text = random && resultat == true){
        alert("GG")
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
    if (coordonnee == "choix" && i == 4) {
      alert("Veuillez choisir un environnement technique du projet.");return false;
    }
    if (coordonnee == "" && i == 5) {
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
    resultat4 = filtre4.test(coordonnee);
    if (resultat4 == false && i == 8) {
      alert("Veuillez mettre un numéros de téléphone valide.");return false;
    }
  }
}

// const textareaElement = document.getElementById('5');
const choixElement = document.getElementById('4');//deroulante
const p = document.getElementById("choix")//choissisez
choixElement.addEventListener('change', () => {//
    p.remove()
})
    // var choix = choixElement.value;
    // if (choix !== "choix") {
    //     textareaElement.style.display = 'block';  //fait apparaitre une textbox de nul par quand la liste deroulant a changer de "choissisez"
    // else {
    //     //   textareaElement.style.display = 'none';  //l'inverse
    //      }

    