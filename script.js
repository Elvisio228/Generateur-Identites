function genererIdentite() {
    if (typeof faker === 'undefined') {
        alert("Erreur : Faker.js ne s'est pas chargé.");
        return;
    }

    let genre = document.getElementById("genre").value;
    let pays = document.getElementById("pays").value;

    let nom, prenom, sexe;

    if (genre === "male") {
        nom = faker.name.lastName('male');
        prenom = faker.name.firstName('male');
        sexe = "Homme";
    } else if (genre === "female") {
        nom = faker.name.lastName('female');
        prenom = faker.name.firstName('female');
        sexe = "Femme";
    } else {
        nom = faker.name.lastName();
        prenom = faker.name.firstName();
        sexe = faker.name.gender();
    }

    let naissance = faker.date.past(50, new Date(2002, 0, 1)).toLocaleDateString();
    let indicatif = faker.phone.phoneNumber('+##');
    let numero = faker.phone.phoneNumber('### ### ###');
    let telephone = indicatif + ' ' + numero;

    let email = faker.internet.email(prenom, nom);
    let securite = faker.datatype.number({ min: 100000000, max: 999999999 });

    let avatar = (sexe === "Femme") ? "avatar-femme.png" : "avatar-homme.png";

    document.getElementById("nom").textContent = prenom + " " + nom;
    document.getElementById("genreAffiche").textContent = sexe;
    document.getElementById("naissance").textContent = naissance;
    document.getElementById("telephone").textContent = telephone;
    document.getElementById("email").textContent = email;
    document.getElementById("securite").textContent = securite;
    document.getElementById("avatar").src = avatar;

    // Adresse
    document.getElementById("rue").textContent = faker.address.streetAddress();
    document.getElementById("ville").textContent = faker.address.city();
    document.getElementById("etat").textContent = faker.address.state();
    document.getElementById("codepostal").textContent = faker.address.zipCode();
    document.getElementById("paysAffiche").textContent = pays;
}
