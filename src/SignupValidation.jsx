function Validation(values){

    let error= {};

    // Email validation pattern
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation pattern: at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;

    if(values.name === ''){
        error.name = "Name should not be empty";
    }else{
        error.name = "";
    }
    if(values.email === ''){
        error.email = "Email should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't match";
    }else{
        error.email = "";
    }

    if(values.password === ''){
        error.password = "Password should not be empty";
    }else if(!password_pattern.test(values.password)){
        error.password = "Eamil Didn't match";
    }else{
        error.password = "";
    }

    return error;

}

export default Validation;