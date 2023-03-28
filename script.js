(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

let fn;
let ln;
let email;
let web;
let gender;
let attend;
const checks = [];
let file;

function myFunction() {
    fn = document.getElementById('firstname').value;
    console.log(fn);
    ln = document.getElementById('ln').value;
    console.log(ln);
    email = document.getElementById('email').value;
    console.log(email);
    web = document.getElementById('web').value;
    console.log(web);
    gender = document.querySelector('input[name = gender]:checked').value;
    console.log(gender);
    attend = document.querySelectorAll('#box');
    console.log(attend);
    for (let j = 0; j < attend.length; j++) {
        let mad = attend[j].checked;
        if (mad == true) {
            checks.push(attend[j].value);
        }
    }
    let check = checks.toString();
    console.log(check);
    file = document.getElementById('img').value;
    console.log(file);
    let img = "img/" + file.substring(12, file.length)
    console.log(img)

    let row = `
            <tr >
                <td id="left">
                <div><b>${fn + " " +ln}</b></div>
                <div>${gender}</div>
                <div>${email}</div>
                <div><a href="#">${web}</a></div>
                <div><b>${check}</b></div>
                </td>
                <td><img id="stu"src="${img}" alt="image"></td>
            </tr>`
    document.getElementById("table").style.visibility = "visible";
    tab.innerHTML += row;
}



function Clear() {
    // fn.value= " ";
    // ln.value = " ";
    // email.value =" ";
    // web.value = " ";
    while(checks.length > 0) {
        checks.pop();
    }
    attend = document.querySelectorAll('#box');
    for (let i = 0; i < attend.length; i++) {
        attend[i].checked = false;
    }
    firstn = document.getElementById('firstname');
    if (firstn.value != "") {
        firstn.value = "";
    }
    lastn = document.getElementById('ln');
    if (lastn.value != "") {
        lastn.value = "";
    }
    emailn = document.getElementById('email');
    if (emailn.value != "") {
        emailn.value = "";
    }

    webn = document.getElementById('web');
    if (webn.value != "") {
        webn.value = "";
    }

    filen = document.getElementById('img');
    if (filen.value != "") {
        filen.value = "";
    }
}