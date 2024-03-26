// var element = document.getElementById("button1"); // exercice patrick
// element.addEventListener("click", function textBox() 
// {
//     text = document.getElementById("textBox1").value
//    alert("Salutation "+text);
// });
// const random = Math.floor(Math.random() * 100)+1  // exercice nombre aleatoire 
// console.log(random)
// function verif() 
// {
//     text = document.getElementById("textBox1").value
//     filtreNombre = new RegExp("^[0-9]+$");
//     resultat = filtreNombre.test(text);
//     console.log(resultat);
//     if(resultat == false){
//         alert("veuillez rentrer que des chiffres/nombres")
//     }
//     else if( text < random && resultat == true){
//         alert("trop petit")
//     }   
//     else if( text >  random && resultat == true){
//         alert("trop grand")
//     }   
//     else if( text = random && resultat == true){
//         alert("GG")
//     }   
//     else
//     alert("erreur")
// } 
function verif2(){
    filtre = new RegExp("^[a-z]+$")
    filtre2 = new RegExp("^([0-9]{5})+$")
    filtre3 = new RegExp("^[_a-z0-9.-]+@[_a-z0-9.-]+.[a-z]{2,4}$")
    filtre4 = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$")
    for(let i = 0;i<6;i++){
    coordonnee = document.getElementById(i).value
    resultat = filtre.test(coordonnee);
    if(coordonnee == false && i==0){//nom de société = 1 
        alert("Veuillez rentrer un nom de société.");break
    }        
    if(resultat == false && i ==1){
        alert("Veuillez mettre une personne a conctater.");break
    }   
    if(coordonnee == false && i == 2){
        alert("Veuillez mettre une adresse.");break
    } 
    if(resultat == false && i == 3){
        alert("Veuillez mettre une Ville.");break
    } 
    if(coordonnee == "choix0" && i == 4){
        alert("Veuillez choisir un environnement technique du projet.");break
    }
    if(coordonnee == "" && i == 5){
        alert("Veuillez decrire votre projet.");break
    }
}
    coordonnee = document.getElementById("CP").value
    resultat2 = filtre2.test(coordonnee)
    if(resultat2 == false){
        alert("Veuillez mettre un code postal a cinq chiffre.")
    } 
    coordonnee = document.getElementById("Email").value// n'autorise pas les , dans le nom de l'email regarder les caractere autoriser pour les adresse email 
    resultat3 = filtre3.test(coordonnee);
    if(resultat3 == false){
        alert("Veuillez mettre une adresse email.")
    }
    coordonnee = document.getElementById("tel").value
    resultat4 = filtre4.test(coordonnee);
    console.log(coordonnee)
    if(resultat4 == false){
        alert("Veuillez mettre un numéros de téléphone valide.")
    }
}

const choixElement = document.getElementById('4');
const textareaElement = document.getElementById('5');

choixElement.addEventListener('change', () => {
  const choix = choixElement.value;
  if (choix !== "choix0") {
    textareaElement.style.display = 'block';
  } else {
    textareaElement.style.display = 'none';
  }
});