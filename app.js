function sendMail() {
    let parms = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,

    }

    emailjs.send("service_opgdn6u", "template_1vmsd68", parms).then(alert("Email Sent!"))
}