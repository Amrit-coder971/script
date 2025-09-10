const formEl = document.getElementById('student-form');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    // const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = new RegExp('^[0-9]{7,15}$');

    const fNameEl = document.querySelector('#fname');
    const mNameEl = document.querySelector('#mname');
    const lNameEl = document.querySelector('#lname');
    const addressEl = document.querySelector('#address');
    const emailEl = document.querySelector('#email');
    const phoneEl = document.querySelector('#phone');
    const semesterEl = document.querySelector('#semester');
    const genderEl = document.getElementsByName("gender");

    let genderValue = "";
    genderEl.forEach(element => {
        if(element.checked){
            genderValue = element.value;
        }
    })

    const fNameValue = fNameEl.value.trim();
    const mNameValue = mNameEl.value.trim();
    const lNameValue = lNameEl.value.trim();
    const addressValue = addressEl.value.trim();
    const emailValue = emailEl.value.trim();
    const phoneValue = phoneEl.value.trim();
    const semesterValue = semesterEl.value.trim();

    let isFormValid = true;

    document.querySelectorAll('.error').forEach(el => el.innerText = "");

    if(fNameValue === ""){
        document.getElementById("fnameError").innerText = 'First name is required!';
        isFormValid = false;
    }

    if(lNameValue === ""){
        document.getElementById("lnameError").innerText = 'Last name is required!';
        isFormValid = false;
    }

    if(!emailRegex.test(emailValue)){
        document.getElementById("emailError").innerText = 'invalid email format!';
        isFormValid = false;
    }

    if(!phoneRegex.test(phoneValue)){
        document.getElementById("phoneError").innerText = 'invalid phone number!';
        isFormValid = false;
    }

    if(genderValue === ""){
        document.getElementById("genderError").innerText = 'please select a gender';
        isFormValid = false;
    }

    if(isFormValid){
        const dataEl = document.getElementById('data');
        dataEl.innerText = `
        Data List:
            firstName: ${fNameValue}
            middleName: ${mNameValue}
            lastName: ${lNameValue}
            address: ${addressValue}
            email: ${emailValue}
            phone: ${phoneValue}
            gender: ${genderValue}
            semester: ${semesterValue}
            `
    }
})