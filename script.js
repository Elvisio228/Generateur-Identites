function generateIdentity() {
    if (typeof faker !== 'undefined') {
        let gender = faker.name.gender(true);
        let name = faker.name.findName(undefined, undefined, gender === 'male' ? 0 : 1);
        let birthdate = faker.date.past(40, new Date('2003-01-01')).toLocaleDateString();
        let cleanPhone = faker.phone.phoneNumber('##########').replace(/\D/g, '');
        let indicatif = "+" + faker.random.number({min:1, max:199});
        let phone = indicatif + " " + cleanPhone;
        let email = faker.internet.email();
        let ssn = faker.random.alphaNumeric(9);
        let avatar = `https://robohash.org/${encodeURIComponent(name)}.png?size=100x100`;

        let street = faker.address.streetAddress();
        let city = faker.address.city();
        let state = faker.address.state();
        let zip = faker.address.zipCode();
        let country = faker.address.country();

        document.getElementById("name").textContent = name;
        document.getElementById("gender").textContent = gender;
        document.getElementById("birthdate").textContent = birthdate;
        document.getElementById("phone").textContent = phone;
        document.getElementById("email").textContent = email;
        document.getElementById("ssn").textContent = ssn;
        document.getElementById("avatar").src = avatar;
        document.getElementById("street").textContent = street;
        document.getElementById("city").textContent = city;
        document.getElementById("state").textContent = state;
        document.getElementById("zip").textContent = zip;
        document.getElementById("country").textContent = country;
    } else {
        alert("Faker.js ne s'est pas chargé.");
    }
}

// Copier les données
function copyIdentity() {
    let content = `
Nom et prénom: ${document.getElementById("name").textContent}
Genre: ${document.getElementById("gender").textContent}
Naissance: ${document.getElementById("birthdate").textContent}
Téléphone: ${document.getElementById("phone").textContent}
Email: ${document.getElementById("email").textContent}
Numéro sécurité: ${document.getElementById("ssn").textContent}

Adresse:
Rue: ${document.getElementById("street").textContent}
Ville: ${document.getElementById("city").textContent}
État: ${document.getElementById("state").textContent}
Code postal: ${document.getElementById("zip").textContent}
Pays: ${document.getElementById("country").textContent}
    `;
    navigator.clipboard.writeText(content).then(() => {
        alert("Identité copiée !");
    });
}

// PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Identité Générée :", 10, 10);
    doc.text(`Nom et prénom: ${document.getElementById("name").textContent}`, 10, 20);
    doc.text(`Genre: ${document.getElementById("gender").textContent}`, 10, 30);
    doc.text(`Naissance: ${document.getElementById("birthdate").textContent}`, 10, 40);
    doc.text(`Téléphone: ${document.getElementById("phone").textContent}`, 10, 50);
    doc.text(`Email: ${document.getElementById("email").textContent}`, 10, 60);
    doc.text(`Numéro sécurité: ${document.getElementById("ssn").textContent}`, 10, 70);
    doc.text(`Rue: ${document.getElementById("street").textContent}`, 10, 80);
    doc.text(`Ville: ${document.getElementById("city").textContent}`, 10, 90);
    doc.text(`État: ${document.getElementById("state").textContent}`, 10, 100);
    doc.text(`Code postal: ${document.getElementById("zip").textContent}`, 10, 110);
    doc.text(`Pays: ${document.getElementById("country").textContent}`, 10, 120);
    doc.save("identite.pdf");
}
