actions = document.getElementById("actions");
attaque = document.getElementById("attaque");
défense = document.getElementById("défense");
pouvoir = document.getElementById("pouvoir");
valeurResultat = document.getElementById("valeurResultat");
afficheAction = document.getElementById("afficheAction");
hero1 = document.getElementById("hero");
monstre1 = document.getElementById("monstre1");
mortMonstre1= afficheAction.innerHTML = "Vous avez vaincu le monstre 1 !"

afficheAction.innerHTML="Héro 1, que voulez-vous faire ?"

attaque.onclick = function() {
    PVmonstre1.innerHTML = PVmonstre1.innerHTML-5;
    afficheAction.innerHTML = "Vous attaquez le monstre 1.";
}

défense.onclick = function() {
    afficheAction.innerHTML = "Vous vous défendez.";
}
pouvoir.onclick = function() {
    PVmonstre1.innerHTML = PVmonstre1.innerHTML-15;
    afficheAction.innerHTML = "Vous lancez une attaque spéciale sur le monstre 1!";
}

if (PVmonstre1<0){
 console.log("mortMonstre1");
}

