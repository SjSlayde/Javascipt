document.addEventListener('DOMContentLoaded', function () {
    const formulaire = document.getElementById('monFormulaire');

    formulaire.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêcher l'envoi du formulaire avant la validation

        // Validation des champs
        let estValide = true;
        estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById('nom'), 'Nom invalide.');
        estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById('prenom'), 'Prénom invalide.');
        estValide &= validerChamp(/^\S+@\S+\.\S+$/, document.getElementById('email'), 'Email invalide.');
        estValide &= validerChamp(/^\d{1,3}$/, document.getElementById('age'), 'Age invalide.');
        estValide &= validerChamp(/.*/, document.getElementsById('sexe'), ''); // Pas de regex spécifique pour le sexe
        estValide &= validerChamp(/.+/ , document.getElementById('adresse'), 'Adresse invalide.');
        estValide &= validerChamp(/^\d{5}$/, document.getElementById('cp'), 'Code Postal invalide.');
        estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-\s]+$/, document.getElementById('ville'), 'Ville invalide.');
        estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-\s]+$/, document.getElementById('pays'), 'Pays invalide.');
        estValide &= validerChamp(/.*/, document.getElementById('profession'), ''); // Pas de regex spécifique pour la profession

        if (estValide) {
            // Ici, vous pouvez traiter et soumettre le formulaire comme vous le souhaitez
            console.log("Formulaire valide, prêt à être soumis.");
            formulaire.submit();
        }
    });
});
alert("yop")




/*****************  Ici les fonctions annexes */

function validerChamp(regex, champ, messageErreur) {
    if (!regex.test(champ.value)) {
        alert(messageErreur);
        champ.focus();
        return false;
    }
    return true;
}