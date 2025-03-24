function generateIdentity() {
    // Vérifie que Faker est bien chargé
    if (typeof faker !== 'undefined') {
        let name = faker.name.findName();
        let address = faker.address.streetAddress();
        let email = faker.internet.email();
        let phone = faker.phone.phoneNumber();

        document.getElementById("name").textContent = name;
        document.getElementById("address").textContent = address;
        document.getElementById("email").textContent = email;
        document.getElementById("phone").textContent = phone;
    } else {
        alert("Erreur : Faker.js ne s'est pas chargé. Vérifie ta connexion Internet.");
    }
}
