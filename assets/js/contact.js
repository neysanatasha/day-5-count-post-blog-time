function submitData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    console.log(name, email, phone, subject, message)

    if (name == "") {
        return alert('Nama harus diisi ygy')
    } else if (email == "") {
        return alert('Email harus diisi ygy')
    } else if (phone == "") {
        return alert('Nomor telepon harus diisi ygy')
    } else if (subject == "") {
        return alert('Subject harus diisi ygy')
    } else if (message == "") {
        return alert('Message harus diisi ygy')
    }

    let link = document.createElement('a')
    link.href = `mailto:${email}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak nomor saya di ${phone}`
    link.click()

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }
    console.log(student)
}

