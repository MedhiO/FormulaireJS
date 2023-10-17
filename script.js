function validerCompletionFormulaire() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var completionValide = true;

    if (nom === "") {
        document.getElementById("erreurNom").textContent = "Le champ Nom est requis.";
        completionValide = false;
    } else {
        document.getElementById("erreurNom").textContent = "";
    }

    if (prenom === "") {
        document.getElementById("erreurPrenom").textContent = "Le champ Prénom est requis.";
        completionValide = false;
    } else {
        document.getElementById("erreurPrenom").textContent = "";
    }

    if (email === "") {
        document.getElementById("erreurEmail").textContent = "Le champ Email est requis.";
        completionValide = false;
    } else {
        document.getElementById("erreurEmail").textContent = "";
    }

    if (password === "") {
        document.getElementById("erreurMotDePasse").textContent = "Le champ Mot de passe est requis.";
        completionValide = false;
    } else {
        document.getElementById("erreurMotDePasse").textContent = "";
    }

    if (confirmPassword === "") {
        document.getElementById("erreurConfirmationMotDePasse").textContent = "Le champ Confirmer le mot de passe est requis.";
        completionValide = false;
    } else {
        document.getElementById("erreurConfirmationMotDePasse").textContent = "";
    }

    return completionValide;
}

function validerLongueurNomPrenom() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var longueurValide = true;

    if (nom.length < 3) {
        document.getElementById("erreurLongueurNom").textContent = "Le nom doit contenir au moins 3 caractères.";
        longueurValide = false;
    } else {
        document.getElementById("erreurLongueurNom").textContent = "";
    }

    if (prenom.length < 3) {
        document.getElementById("erreurLongueurPrenom").textContent = "Le prénom doit contenir au moins 3 caractères.";
        longueurValide = false;
    } else {
        document.getElementById("erreurLongueurPrenom").textContent = "";
    }

    return longueurValide;
}

function validerEmail() {
    var email = document.getElementById("email").value;
    var emailValide = true;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("erreurFormatEmail").textContent = "L'adresse email n'est pas valide.";
        emailValide = false;
    } else {
        document.getElementById("erreurFormatEmail").textContent = "";
    }

    return emailValide;
}

function validerMotDePasse() {
    var motDePasse = document.getElementById("password").value;
    var motDePasseValide = true;

    var motDePasseRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!motDePasseRegex.test(motDePasse)) {
        document.getElementById("erreurFormatMotDePasse").textContent = "Le mot de passe doit contenir au moins 8 caractères, y compris des majuscules, des minuscules, des chiffres et des caractères spéciaux.";
        motDePasseValide = false;
    } else {
        document.getElementById("erreurFormatMotDePasse").textContent = "";
    }

    return motDePasseValide;
}

function validerSimilaritéMotDePasse() {
    var motDePasse = document.getElementById("password").value;
    var confirmMotDePasse = document.getElementById("confirmPassword").value;
    var SimilaritéConfirmer = true;

    if (motDePasse !== confirmMotDePasse) {
        document.getElementById("erreurFormatConfirmationMotDePasse").textContent = "Les mots de passe ne correspondent pas.";
        SimilaritéConfirmer = false;
    } else {
        document.getElementById("erreurFormatConfirmationMotDePasse").textContent = "";
    }

    return SimilaritéConfirmer;
}

function validationFinal() {
    var succès = true;
    var completionValide = validerCompletionFormulaire();
    var longueurValide = validerLongueurNomPrenom();
    var emailValide = validerEmail();
    var motDePasseValide = validerMotDePasse();
    var SimilaritéConfirmer = validerSimilaritéMotDePasse();

    if (!completionValide || !longueurValide || !emailValide || !motDePasseValide || !SimilaritéConfirmer) {
        succès = false;
        event.preventDefault();
    }

    return succès;
}




