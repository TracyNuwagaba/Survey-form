// Form validation
const validate = () => {
    var name = document.surveyform.name.value;
    var email = document.surveyform.email.value;
    var role = document.surveyform.role.value;

    // name validation
    if(name=="") {
        alert("Name is required");
        document.surveyform.name.focus();
        return false;
    } else if(!name.match(/^[A-Za-z\s]+$/)) {
        alert("invalid name");
        document.surveyform.name.focus();
        return false;
    }

    // email validation
    let emailExp = /^[a-zA-Z0-9.|#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailResult = emailExp.test(email);

    if(email=="") {
        alert("Email is required");
        document.surveyform.email.focus();
        return false;
    } else if(!emailResult) {
        alert("invalid email");
        document.surveyform.email.focus();
        return false;
    }

    // dropdown validation
    if(role=="") {
        alert("Select your current role");
        document.surveyform.role.focus();
        return false;
    }

    // radio button validation
    let valid = false;
    let gender = document.surveyform.gender;

    for(var i=0;i<gender.length;i++) {
        if(gender[i].checked) {
            valid = true;
            break;
        }
    }

    if(!valid) {
        alert("Please select gender");
        return false;
    }

    // checkbox validation
    let validOption = false;

    if(document.surveyform.challenges.checked) {
        validOption = true;
    }
    if(document.surveyform.projects.checked) {
        validOption = true;
    }
    if(document.surveyform.pairProgramming.checked) {
        validOption = true;
    }
    if(document.surveyform.community.checked) {
        validOption = true;
    }
    
    if(!validOption) {
        alert("Please select atleast one feature");
        return false;
    }

    alert("Form submitted");
}