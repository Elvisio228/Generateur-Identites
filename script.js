function generateIdentity() {
    if (typeof faker !== 'undefined') {
        let gender = faker.name.gender(true);
        let name = faker.name.findName(undefined, undefined, gender === 'male' ? 0 : 1);
        let birthdate = faker.date.past(40, new Date('2003-01-01')).toLocaleDateString();
        let phone = faker.phone.phoneNumber();
        let email = faker.internet.email();
        let ssn = faker.random.alphaNumeric(9);
        let avatar = faker.image.avatar();

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
