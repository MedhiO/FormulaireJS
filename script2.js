let user =localStorage.getItem("datauser");
console.log("donnée :" + user);

//on vient faire le parse du user pour récuperer tous les éléments de l'objet
let objUser=JSON.parse(user)

document.getElementById('span2').innerHTML = objUser.nom;
document.getElementById('span4').innerHTML = objUser.date;