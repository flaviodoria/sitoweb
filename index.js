function sendMail(event) {
    event.preventDefault();
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_wkgp6yu";
    const templateID = "template_jxwkzyk";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name"). value = "";
        document.getElementById("email"). value = "";
        document.getElementById("message"). value = "";
        console.log(res);
        alert ("Il tuo messaggio è stato inviato correttamente");
    })

    .catch((err) => console.log(err));
}
