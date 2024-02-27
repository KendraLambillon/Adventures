const form = document.getElementById("form");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

let validate = {
    firstname: false,
    lastname: false,
    phone: false,
    email: false
}

//Error message
function setError(input, message){
    const formItem = input.parentElement;
    const small = formItem.querySelector("small"); // select where the mensaje is written
    formItem.className = "form-item error"; // select css class
    small.innerText = message;
}


//If everything is correct
function setSuccess(input){
    const formItem = input.parentElement;
    formItem.className = "form-item success";
}


//Validation for the firstname
firstname.addEventListener("blur",()=>{
    let firstname_re = /^[a-zA-Z ]{3,40}$/;

    if(firstname.value == "" || firstname.value == null){
        validate.firstname = false;
        setError(firstname, "Put your firstname");
    }else{
        if(!firstname_re.exec(firstname.value)){
            validate.firstname = false;
            setError(firstname, "Firstname has to be between 3-40 characters.")
        }else{
            validate.firstname = true;
            setSuccess(firstname);
        }
    }
})

//Validation for the lastname
lastname.addEventListener("blur",()=>{
    let lastname_re = /^[a-zA-Z ]{4,60}$/;

    if(lastname.value == "" || lastname.value == null){
        validate.lastname = false;
        setError(lastname, "Put your lastname");
    }else{
        if(!lastname_re.exec(lastname.value)){
            validate.lastname = false;
            setError(lastname, "Lastname has to be between 4-60 characters.")
        }else{
            validate.lastname = true;
            setSuccess(lastname);
        }
    }
})

//Validation for the phone
phone.addEventListener("blur",()=>{
    let phone_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

    if(phone.value == "" || phone.value == null){
        validate.phone = false;
        setError(phone, "Put your phone");
    }else{
        if(!phone_re.exec(phone.value)){
            validate.phone = false;
            setError(phone, "Phone has to have 9 numbers")
        }else{
            validate.phone = true;
            setSuccess(phone);
        }
    }
})

//Validation for the email
email.addEventListener("blur",()=>{
    let email_re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(email.value == "" || email.value == null){
        validate.email = false;
        setError(email, "Put your email");
    }else{
        if(!email_re.exec(email.value)){
            validate.email = false;
            setError(email, "Email is not valid")
        }else{
            validate.email = true;
            setSuccess(email);
        }
    }
})

//Sending the form
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let errorV = false;

    for(const property in validate){
        if(validate[property] == false){
            errorV = true;
        }
    }

    if(!errorV){
        form.submit();
    }
})

