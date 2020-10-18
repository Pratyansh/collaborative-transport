const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInputs(data) {
    let errors = {};
    console.log("here");
    //data = formdata
    //Converting empty fields to string so they can be processed
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //Name checks
    if(Validator.isEmpty(data.name)){
        errors.name = "Name is a required field";
    }
    //Email checks
    if(Validator.isEmpty(data.email)){
        errors.email = "Email is a required field";
    }
    //Password checks
    if(Validator.isEmpty(data.password)){
        errors.password = "Password is a required field";
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Conform Password is a required field";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
};