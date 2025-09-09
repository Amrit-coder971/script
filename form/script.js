const  formEl = document.getElementById("student-form");

formEl.addEventListener('submit',(e) =>{
    e.preventDefault();
    
  //  const phoneRegex= new RegExp,'^[0-9]';

    const  fnameEl = document.querySelector('#First_Name');
    const fnamevalue = fnameEl.value.trim();
    
     const  mnameEl = document.querySelector('#Middle_Name');
    const mnamevalue = mnameEl.value.trim();

     const  lnameEl = document.querySelector('#last_Name');
    const lnamevalue = lnameEl.value.trim();

    const  phonenumberEl = document.querySelector('#phone_number');
    const phonevalue = lnameEl.value.trim();

    let isFormValid  = true;
    document.querySelectorAll('.error').forEach(el => el.innerText)

    if(fnamevalue ==""){
        document.getElementById("fnameError").innerText = 'First_Namw';
        isFormValid= false;

    }

    if(!phoneRegex.text(phonevalue)){
        document.getElementById("phoneError").innerText = 'invalid Phone';
        isFormValid= false;
    }

    if(isFormValid){
        const dataEl =document.getElementById('data');
        dataEl.innerText=
        Data 
        first

    }
    

    console.log(fnamevalue,mnamevalue,lnamevalue);
})