function validerCompletionFormulaire() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let completionValide = true;

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
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let longueurValide = true;

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
    let email = document.getElementById("email").value;
    let emailValide = true;

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("erreurFormatEmail").textContent = "L'adresse email n'est pas valide.";
        emailValide = false;
    } else {
        document.getElementById("erreurFormatEmail").textContent = "";
    }

    return emailValide;
}

function validerMotDePasse() {
    let motDePasse = document.getElementById("password").value;
    let motDePasseValide = true;

    let motDePasseRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!motDePasseRegex.test(motDePasse)) {
        document.getElementById("erreurFormatMotDePasse").textContent = "Le mot de passe doit contenir au moins 8 caractères, y compris des majuscules, des minuscules, des chiffres et des caractères spéciaux.";
        motDePasseValide = false;
    } else {
        document.getElementById("erreurFormatMotDePasse").textContent = "";
    }

    return motDePasseValide;
}

function validerSimilaritéMotDePasse() {
    let motDePasse = document.getElementById("password").value;
    let confirmMotDePasse = document.getElementById("confirmPassword").value;
    let SimilaritéConfirmer = true;

    if (motDePasse !== confirmMotDePasse) {
        document.getElementById("erreurFormatConfirmationMotDePasse").textContent = "Les mots de passe ne correspondent pas.";
        SimilaritéConfirmer = false;
    } else {
        document.getElementById("erreurFormatConfirmationMotDePasse").textContent = "";
    }

    return SimilaritéConfirmer;
}

function validationFinal() {
    let succès = true;
    let completionValide = validerCompletionFormulaire();
    let longueurValide = validerLongueurNomPrenom();
    let emailValide = validerEmail();
    let motDePasseValide = validerMotDePasse();
    let SimilaritéConfirmer = validerSimilaritéMotDePasse();

    if (!completionValide || !longueurValide || !emailValide || !motDePasseValide || !SimilaritéConfirmer) {
        succès = false;
        event.preventDefault();
    }
        // Récupérer le nom + email + date
        let usernameVal =document.getElementById("nom").value;
        let mailVal =document.getElementById("email").value;
        let dateDuJour = new Date();
    
        let annee   = now.getFullYear();
        let mois    = ('0'+(now.getMonth()+1)).slice(-2);
        let jour    = ('0'+now.getDate()   ).slice(-2);
        let heure   = ('0'+now.getHours()  ).slice(-2);
        let minute  = ('0'+now.getMinutes()).slice(-2);
        let seconde = ('0'+now.getSeconds()).slice(-2);
        
        //envoie dans le localStorage
        localStorage.setItem("nom",usernameVal);
        localStorage.setItem("mail",mailVal);
        localStorage.setItem("new Date",dateDuJour);
    
        //création de l'objet user
        const user1 ={
        nom : usernameVal,
        mail : mailVal,
        date : dateDuJour,
        }
    
        //envoie dans le localStorage
        dataUser = localStorage.setItem('datauser',JSON.stringify(user1));
    
        let user =localStorage.getItem("datauser");
        console.log("donnée :" + user);
    
        //on vient faire le parse du user pour récuperer tous les éléments de l'objet
        let objUser=JSON.parse(user)
        
        document.getElementById('nomAffiché').innerHTML = objUser.nom;
        document.getElementById('mailAffiché').innerHTML = objUser.mail;

    return succès;
}

//ajout d'un evenement lors du submit
document.getElementById("monFormulaire").addEventListener("submit", validationFinal);