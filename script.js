function generateIdentity() {
    if (typeof faker !== 'undefined') {
        const country = document.getElementById("countrySelect").value;
        const genderChoice = document.getElementById("genderSelect").value;

        let gender = (genderChoice === "indifferent") ? faker.name.gender(true) : (genderChoice === "male" ? "male" : "female");
        let name = faker.name.findName(undefined, undefined, gender === "male" ? 0 : 1);
        let birthdate = faker.date.past(40, new Date('2003-01-01')).toLocaleDateString();
        let indicatif = getIndicatif(country);
        let cleanPhone = faker.phone.phoneNumber('##########');
        let phone = `${indicatif} ${cleanPhone}`;
        let email = faker.internet.email();
        let ssn = faker.random.alphaNumeric(9);
        let avatar = gender === "male" ? "avatar-homme.png" : "avatar-femme.png";

        let street = faker.address.streetAddress();
        let city = faker.address.city();
        let state = faker.address.state();
        let zip = faker.address.zipCode();
        let company = faker.company.companyName();
        let job = faker.name.jobTitle();
        let card = faker.finance.creditCardNumber();
        let iban = faker.finance.iban();

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
        document.getElementById("company").textContent = company;
        document.getElementById("job").textContent = job;
        document.getElementById("card").textContent = card;
        document.getElementById("iban").textContent = iban;
    } else {
        alert("Faker.js ne s'est pas chargé.");
    }
}

function getIndicatif(country) {
    const indicatifs = {
        "France": "+33",
        "USA": "+1",
        "Canada": "+1",
        "Allemagne": "+49",
        "Togo": "+228"
    };
    return indicatifs[country] || "+00";
}

function copyIdentity() {
    let content = `
Nom: ${document.getElementById("name").textContent}
Genre: ${document.getElementById("gender").textContent}
Naissance: ${document.getElementById("birthdate").textContent}
Téléphone: ${document.getElementById("phone").textContent}
Email: ${document.getElementById("email").textContent}
SSN: ${document.getElementById("ssn").textContent}
Rue: ${document.getElementById("street").textContent}
Ville: ${document.getElementById("
