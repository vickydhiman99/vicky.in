function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "vickykmr0808@gmail.com",
        Password : "Dhiman#99",
        To : 'vickykmr0808@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


